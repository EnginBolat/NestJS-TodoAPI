import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger";
import { Log, Todo } from "src/model/";
import { LogService } from "src/service/";

@ApiTags('Log')
@Controller('api/v1/log')
export class LogController {

    constructor(private readonly logService: LogService) { }

    @Get()
    async getAll() {
        return await this.logService.getAll();
    }
}