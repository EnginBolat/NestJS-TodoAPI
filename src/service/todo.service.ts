
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Todo } from '../model/';
import { BaseService } from "./base.service";

@Injectable()
export class TodoService implements BaseService<Todo> {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Todo[]> {
        try {
            return this.prisma.todo.findMany({ orderBy: { createdDate: 'desc' } });
        } catch (error) {
            throw error;
        }
    }

    async get(id: number): Promise<Todo> {
        try {
            return this.prisma.todo.findUnique({ where: { id: Number(id) } });
        } catch (error) {
            throw error;
        }
    }

    async create(data: Todo): Promise<Todo> {
        try {
            return this.prisma.todo.create({ data });
        } catch (error) {
            throw error;
        }
    }

    async update(id: number, data: Todo): Promise<Todo> {
        try {
            return this.prisma.todo.update({
                where: { id: Number(id) },
                data: { title: data.title, description: data.description, isDone: data.isDone }
            })
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.prisma.todo.delete({
                where: { id: Number(id) }
            });
            return true
        } catch (error) {
            return false
        }
    }
}