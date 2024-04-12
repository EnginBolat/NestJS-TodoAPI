import { Prisma } from "@prisma/client";
import { IsBoolean, IsEmail, IsString, Min } from "class-validator";

export class User implements Prisma.UserCreateInput {
    id: number
    @IsString()
    name: string
    @IsString()
    surname: string
    @IsEmail()
    email: string
    @IsString()
    password: string
    @IsBoolean()
    isDeleted: boolean
    @IsString()
    createdDate: string
    @IsString()
    updatedDate: string
}