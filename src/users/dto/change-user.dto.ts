import { ApiProperty } from "@nestjs/swagger";

export class ChangeUserDto {
    @ApiProperty({ example: 'danil01', description: 'User name' })
    readonly username?: string;

    @ApiProperty({ example: 'pHd2fJ0', description: 'Password' })
    readonly password?: string;

    @ApiProperty({ example: '87052131166', description: 'Phone number' })
    readonly phone?: string;

    @ApiProperty({ example: "2000-08-09", description: 'Date of birth in ISO format' })
    readonly date?: Date;

    @ApiProperty({ example: "Male", description: 'Sex' })
    readonly sex?: string;
}