import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profiles.model';

@Injectable()
export class ProfilesService {
    constructor(@InjectModel(Profile) private profileRepository: typeof Profile) { }

    async createProfile(createProfileDto: CreateProfileDto) {
        const profile = this.profileRepository.create(createProfileDto);
        return profile;
    }

    async getAllProfiles() {
        const profiles = this.profileRepository.findAll();
        return profiles;
    }
}
