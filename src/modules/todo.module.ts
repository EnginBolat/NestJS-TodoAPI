import { Module } from '@nestjs/common';
import { TodoController } from 'src/controller/';
import { PrismaService } from 'src/prisma.service';
import { TodoService } from 'src/service/';

@Module({
    controllers: [TodoController],
    providers: [TodoService, PrismaService],
})
export class TodoModule { }
