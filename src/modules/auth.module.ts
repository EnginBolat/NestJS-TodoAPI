import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService, LogService } from 'src/service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, LogService, PrismaService],
})
export class AuthModule { }
