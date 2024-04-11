import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo.module';
import { UserModule } from './modules';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
