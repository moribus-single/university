import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Profile } from "../profiles/profiles.model";

@Table({ tableName: 'grades' })
export class Grades extends Model<Grades> {
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '1', description: 'ID of the student' })
    @ForeignKey(() => Profile)
    @Column({ type: DataType.INTEGER, allowNull: false })
    student_id: number;

    @ApiProperty({ example: '1', description: 'ID of the teacher' })
    @ForeignKey(() => Profile)
    @Column({ type: DataType.INTEGER, allowNull: false })
    teacher_id: number;

    @ApiProperty({ example: '5', description: 'Grade' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    grade: number;

    @ApiProperty({ example: 'Math', description: 'Name of the subject' })
    @Column({ type: DataType.STRING, allowNull: false })
    lesson: string;
}