import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo.module';
import { AuthModule, UserModule } from './modules';

@Module({
  imports: [TodoModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
