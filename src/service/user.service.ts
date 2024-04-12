import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { PrismaService } from "src/prisma.service";
import { User } from "src/model";
import { createHash } from "crypto";


@Injectable()
export class UserService implements BaseService<User> {
    constructor(private prisma: PrismaService) { }

    private handleError(error: string, statusCode: HttpStatus): never {
        throw new HttpException(error, statusCode);
    }

    async getAll(): Promise<User[]> {
        try {
            return this.prisma.user.findMany({ orderBy: { createdDate: 'desc' } });
        } catch (error) {
            throw this.handleError('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async get(id: number): Promise<User> {
        try {
            return await this.prisma.user.findUnique({ where: { id: Number(id) } });
        } catch (error) {
            throw this.handleError('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(data: User): Promise<User | null> {
        var user = await this.prisma.user.findFirst({ where: { email: data.email } });
        if (!user) {
            try {
                const hashedPassword = createHash('sha256').update(data.password).digest('hex');
                data.password = hashedPassword;
                return this.prisma.user.create({ data });
            } catch (error) {
                throw this.handleError(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            throw this.handleError('User with this email already exists', HttpStatus.CONFLICT);
        }
    }

    async update(id: number, data: User): Promise<User> {
        var date = new Date();
        try {
            return this.prisma.user.update({
                where: { id: Number(id) },
                data: {
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    password: data.password,
                    isDeleted: data.isDeleted,
                    createdDate: data.createdDate,
                    updatedDate: date.getDate().toLocaleString(),
                }
            })
        } catch (error) {
            throw this.handleError('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.prisma.user.delete({
                where: { id: Number(id) }
            });
            return true;
        } catch (error) {
            throw this.handleError('User not found', HttpStatus.NOT_FOUND);
        }
    }
}