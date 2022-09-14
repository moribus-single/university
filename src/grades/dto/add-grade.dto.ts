import { ApiProperty } from "@nestjs/swagger";

export class AddGradeDto {
    @ApiProperty({ example: "1", description: "ID of the teacher profile" })
    teacher_id: number;

    @ApiProperty({ example: "1", description: "ID of the student profile" })
    student_id: number;

    @ApiProperty({ example: "5", description: "Grade for the lesson" })
    grade: number;

    @ApiProperty({ example: "Math", description: "Name of the lesson" })
    lesson: string;
}