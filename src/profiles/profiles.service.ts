import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { create } from 'domain';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profiles.model';

@Injectable()
export class ProfilesService {
    constructor(@InjectModel(Profile) private profileRepository: typeof Profile) { }

    async createProfile(createProfileDto: CreateProfileDto, id: number) {
        const profile = this.profileRepository.create({ ...createProfileDto, user_id: id });
        return profile;
    }

    async getAllProfiles() {
        const profiles = this.profileRepository.findAll();
        return profiles;
    }

    async changeProfile(changeProfileDto: ChangeProfileDto, user_id: number) {
        const profile = await this.profileRepository.findOne({ where: { id: changeProfileDto.id }, include: { all: true } });

        const updatedProfile = { ...profile, ...changeProfileDto };
        await this.profileRepository.update(updatedProfile, { where: { id: changeProfileDto.id } });
        const syncedProfile = await this.profileRepository.findOne({ where: { id: changeProfileDto.id }, include: { all: true } });

        return syncedProfile;
    }
}
