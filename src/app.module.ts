import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo.module';
import { AuthModule, UserModule, LogModule } from './modules';

@Module({
  imports: [TodoModule, UserModule, AuthModule, LogModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
