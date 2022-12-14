import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ChangeUserDto } from './dto/change-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }

    async getUserByUsername(username: string) {
        const user = await this.userRepository.findOne({ where: { username }, include: { all: true } });
        return user;
    }

    async changeUser(changeUserDto: ChangeUserDto, id: number) {
        const user = await this.userRepository.findOne({ where: { id }, include: { all: true } })

        const updatedUser = { ...user, ...changeUserDto };
        await this.userRepository.update(updatedUser, { where: { id } });
        const syncedUser = await this.userRepository.findOne({ where: { id }, include: { all: true } })

        return syncedUser;
    }
}
