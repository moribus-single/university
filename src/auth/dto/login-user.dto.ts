import { ApiProperty } from "@nestjs/swagger";

export class LogInUserDto {
    @ApiProperty({ example: "danil01", description: "User name" })
    username: string;

    @ApiProperty({ example: "jL2S8hoN", description: "Password" })
    password: string;
}