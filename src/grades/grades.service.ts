import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddGradeDto } from './dto/add-grade.dto';
import { Grades } from './grades.model';

@Injectable()
export class GradesService {
    constructor(@InjectModel(Grades) private gradesRepository: typeof Grades) { }

    async getAllGrades() {
        const marks = this.gradesRepository.findAll();
        return marks;
    }

    async addGrade(addGradeDto: AddGradeDto) {
        const mark = this.gradesRepository.create(addGradeDto);
        return mark;
    }
}
