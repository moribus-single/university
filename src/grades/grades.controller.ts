import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OnlyTeacherProfileGuard } from '../profiles/guards/only-teacher.guard';
import { AddGradeDto } from './dto/add-grade.dto';
import { GradesService } from './grades.service';

@UseGuards(JwtAuthGuard)
@Controller('grades')
export class GradesController {
    constructor(private gradesService: GradesService) { }

    @Get()
    public async getAll() {
        return await this.gradesService.getAllGrades()
    }

    @UseGuards(OnlyTeacherProfileGuard)
    @Post()
    public async addMark(@Body() addGradeDto: AddGradeDto) {
        return await this.gradesService.addGrade(addGradeDto);
    }
}
