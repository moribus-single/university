import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from "bcryptjs";
import { User } from '../users/users.model';
import { LogInUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(logInUserDto: LogInUserDto) { }

    async register(createUserDto: CreateUserDto) {
        const candidateByEmail = await this.userService.getUserByEmail(createUserDto.email);
        const candidateByUsername = await this.userService.getUserByUsername(createUserDto.username);

        if (candidateByEmail || candidateByUsername) {
            throw new HttpException('Username and email must be unique', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(createUserDto.password, process.env.SALT);
        const user = await this.userService.createUser({ ...createUserDto, password: hashPassword });

        return this.generateToken(user);
    }

    async generateToken(user: User) {
        const payload = { username: user.username, email: user.email, id: user.id, profiles: user.profiles }
        return {
            token: this.jwtService.sign(payload)
        };
    }
}
