
import { Prisma } from "@prisma/client";
import { User } from "./user.model";

export class Log implements Prisma.LogCreateInput {
    id: number;
    log: string;
    date: string;
    userId: number;
    user: User
}