
import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";
import { Todo } from '../model/';
import { BaseService } from "./base.service";

@Injectable()
export class TodoService implements BaseService<Todo> {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Todo[]> {
        return this.prisma.todo.findMany({ orderBy: { createdDate: 'asc' } });
    }

    async get(id: number): Promise<Todo> {
        return this.prisma.todo.findUnique({ where: { id: Number(id) } });
    }

    async create(data: Todo): Promise<Todo> {
        return this.prisma.todo.create({ data });
    }

    async update(id: number, data: Todo): Promise<Todo> {
        return this.prisma.todo.update({
            where: { id: Number(id) },
            data: { title: data.title, description: data.description, isDone: data.isDone }
        })
    }

    async delete(id: number): Promise<boolean> {
        try {
            this.prisma.todo.delete({
                where: { id: Number(id) }
            });
            return true
        } catch (error) {
            return false
        }
    }
}