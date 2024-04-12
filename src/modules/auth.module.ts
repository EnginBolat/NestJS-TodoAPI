import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
})
export class AuthModule { }
