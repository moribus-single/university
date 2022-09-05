import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ChangeUserDto } from './dto/change-user.dto';
import { GetUser } from './decorators/get-user.decorator';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    public async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @ApiOperation({ summary: 'Get all the users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    public async getAll() {
        return this.userService.getAllUsers();
    }

    @Post('/change')
    public async changeInfo(@Body() changeUserDto: ChangeUserDto, @GetUser('id') id: number) {
        return this.userService.changeUser(changeUserDto, id);
    }
}
