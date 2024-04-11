import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/service/';

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService],
})
export class UserModule { }
