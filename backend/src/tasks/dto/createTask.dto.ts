import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'my title' })
  @IsString()
  title: string;
  @ApiProperty({ example: 'description ' })
  @IsOptional()
  @IsString()
  description: string;
}
