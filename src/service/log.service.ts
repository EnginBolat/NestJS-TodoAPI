import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class LogService implements NestInterceptor {
    constructor(private prisma: PrismaService) { }

    async getAll() {
        return this.prisma.log.findMany();
    }

    async createLog(userId: number, log: string) {
        var date = new Date();
        return this.prisma.log.create({
            data: {
                log: log,
                date: date.toString(),
                userId: userId,
            }
        });
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const ip = request.ip; // İstemcinin IP adresini alın
        console.log('Client IP:', ip);
        return next.handle();
    }
}