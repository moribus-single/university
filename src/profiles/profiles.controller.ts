import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService) { }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.createProfile(createProfileDto);
    }

    @Get()
    getAll() {
        return this.profileService.getAllProfiles();
    }
}
