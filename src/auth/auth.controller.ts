import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LogInUserDto } from './dto/login-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() logInUserDto: LogInUserDto) {
        return this.authService.login(logInUserDto);
    }

    // @Post('/register')
    // register(@Body() createUserDto: CreateUserDto) {
    //     return this.authService.register(createUserDto);
    // }
}
