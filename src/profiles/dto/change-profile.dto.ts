import { ApiProperty } from "@nestjs/swagger";

export class ChangeProfileDto {
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    id: number;

    @ApiProperty({ example: 'Business school of gratitude', description: 'Name of the faculty' })
    readonly faculty?: string;

    @ApiProperty({ example: 'Stanford', description: 'Name of the university' })
    readonly university?: string;

    @ApiProperty({ example: 'GSB1234', description: 'Name of the group' })
    readonly group?: string;
}