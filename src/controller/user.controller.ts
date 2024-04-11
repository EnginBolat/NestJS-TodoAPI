import { User } from 'src/model';
import { BaseController } from './base.controller';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/v1/user')
export class UserController implements BaseController<User> {
    constructor(private readonly userService: UserService) { }


    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<User> {
        return this.userService.get(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: User): Promise<User> {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.userService.delete(id);
    }

    @Post()
    async create(@Body() postData: User): Promise<User> {
        return await this.userService.create(postData);
    }
}