import { Prisma } from "@prisma/client";

export class Todo implements Prisma.TodoCreateInput {
    id: number;
    title: string
    description?: string;
    isDone: boolean
    createdDate: string;
}