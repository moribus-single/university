import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../users/decorators/get-user.decorator';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profiles.model';
import { ProfilesService } from './profiles.service';

@ApiTags("Profiles")
@UseGuards(JwtAuthGuard)
@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService) { }

    @ApiOperation({ summary: "Create profile" })
    @ApiResponse({ status: 200, type: Profile })
    @Post()
    public async create(@Body() createProfileDto: CreateProfileDto, @GetUser('id') id: number) {
        return this.profileService.createProfile(createProfileDto, id);
    }

    @ApiOperation({ summary: "Get profiles" })
    @ApiResponse({ status: 200, type: [Profile] })
    @Get()
    public async getAll() {
        return this.profileService.getAllProfiles();
    }

    @Post('/change')
    public async changeProfile(@Body() changeProfileDto: ChangeProfileDto, @GetUser('user_id') user_id: number) {
        return this.profileService.changeProfile(changeProfileDto, user_id);
    }

}
