import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Profile } from "../profiles/profiles.model";

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'danil01', description: 'User name' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    username: string;

    @ApiProperty({ example: 'danil@mail.ru', description: 'E-mail' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'pHd2fJ0', description: 'Password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: '87052131166', description: 'Phone number' })
    @Column({ type: DataType.STRING, allowNull: false })
    phone: string;

    @ApiProperty({ example: "2000-08-09", description: 'Date of birth in ISO format' })
    @Column({ type: DataType.DATEONLY, allowNull: false })
    date_of_birth: Date;

    @ApiProperty({ example: "male", description: 'Sex' })
    @Column({ type: DataType.STRING, allowNull: false })
    sex: string;

    @HasMany(() => Profile)
    profiles: Profile[];
}