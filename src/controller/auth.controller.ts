import { Body, Controller, Post, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OTPResonse, User } from 'src/model';
import { AuthService } from 'src/service/auth.service';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("/login")
    async login(@Body('email') email: string, @Body('password') password: string): Promise<User> {
        return this.authService.login(email, password);
    }

    @Post("/forgotPassword")
    forgotPassword(@Body('email') email: string): Promise<OTPResonse> {
        return this.authService.forgotPassword(email);
    }
}