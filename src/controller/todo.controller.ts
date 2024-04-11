import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger";
import { Todo } from "src/model/";
import { TodoService } from "src/service/";
import { BaseController } from "./base.controller";

@ApiTags('Todo')
@Controller('api/v1/todo')
export class TodoController implements BaseController<Todo> {

    constructor(private readonly todoService: TodoService) { }

    @Get()
    async getAll(): Promise<Todo[]> {
        return await this.todoService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<Todo> {
        return this.todoService.get(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Todo): Promise<Todo> {
        return this.todoService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.todoService.delete(id);
    }

    @Post()
    async create(@Body() postData: Todo): Promise<Todo> {
        return await this.todoService.create(postData);
    }
}