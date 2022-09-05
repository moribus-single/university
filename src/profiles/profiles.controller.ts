import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profiles.model';
import { ProfilesService } from './profiles.service';

@ApiTags("Profiles")
@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService) { }

    @ApiOperation({ summary: "Create profile" })
    @ApiResponse({ status: 200, type: Profile })
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.createProfile(createProfileDto);
    }

    @ApiOperation({ summary: "Get profiles" })
    @ApiResponse({ status: 200, type: [Profile] })
    @Get()
    getAll() {
        return this.profileService.getAllProfiles();
    }
}
