import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({ example: 'my title' })
  @IsOptional()
  @IsString()
  title: string;
  @ApiProperty({ example: 'description ' })
  @IsOptional()
  @IsString()
  description: string;
  @ApiProperty({ example: 'false' })
  @IsOptional()
  @IsBoolean()
  done: boolean;
}
