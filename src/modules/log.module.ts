import { Module } from '@nestjs/common';
import { LogController } from 'src/controller';
import { PrismaService } from 'src/prisma.service';
import { LogService } from 'src/service';

@Module({
    controllers: [LogController],
    providers: [LogService, PrismaService],
})
export class LogModule { }
