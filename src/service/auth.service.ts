import { OTPResonse, User } from "src/model";
import { PrismaService } from "src/prisma.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    private handleError(error: string, statusCode: HttpStatus): never {
        throw new HttpException(error, statusCode);
    }


    async login(email: string, password: string): Promise<User> {
        try {
            const user = await this.prisma.user.findFirst({ where: { email: email } });
            if (!user) {
                return this.handleError("Incorrect email or password", HttpStatus.UNPROCESSABLE_ENTITY);
            }
            const passwordMatch = await this.verifyPassword(password, user.password);
            if (!passwordMatch) {
                return this.handleError("Incorrect email or password", HttpStatus.UNPROCESSABLE_ENTITY);
            }
            return user;
        } catch (error) {
            return this.handleError("Incorrect email or password", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    async verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return plainTextPassword === hashedPassword;
    }

    async forgotPassword(email: string): Promise<OTPResonse> {
        var response = new OTPResonse();
        response.otpCode = "";
        var user = await this.prisma.user.findFirst({ where: { email: email } })
        if (!user) {
            return this.handleError("User cannot found", HttpStatus.NOT_FOUND)
        }
        for (let index = 0; index < 5; index++) {
            var number = Math.floor(Math.random() * 9);
            response.otpCode = response.otpCode + number.toString();
        }
        response.message = `Your Recovery Code sended to your email The Code:${response.otpCode}`
        return response;
    }
}