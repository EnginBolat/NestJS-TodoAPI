import { Body, Controller, Post, } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { OTPResonse, User } from 'src/model';
import { AuthService } from 'src/service/auth.service';

class AuthModel {
    email: string;
    password: string;
}

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("/login")
    @ApiBody({ type: AuthModel })
    async login(@Body() user: AuthModel): Promise<User> {
        return this.authService.login(user.email, user.password);
    }

    @Post("/forgotPassword")
    forgotPassword(@Body('email') email: string): Promise<OTPResonse> {
        return this.authService.forgotPassword(email);
    }
}