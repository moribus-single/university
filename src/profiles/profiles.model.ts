import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";

@Table({ tableName: 'profile' })
export class Profile extends Model<Profile> {
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '1', description: 'ID of the user' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_id: number;

    @ApiProperty({ example: 'Business school of gratitude', description: 'Name of the faculty' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    faculty: string;

    @ApiProperty({ example: 'Stanford', description: 'Name of the university' })
    @Column({ type: DataType.STRING, allowNull: false })
    university: string;

    @ApiProperty({ example: 'GSB1234', description: 'Name of the group' })
    @Column({ type: DataType.STRING })
    group: string;
}