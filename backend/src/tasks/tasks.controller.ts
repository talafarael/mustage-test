import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/changeTask.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get('')
  async getTask(
    @Query('search') search?: string,
    @Query('done') done?: string,
  ) {
    const doneFilter =
      done === undefined ? undefined : done === 'true' || done === '1';
    return await this.tasksService.getTasks(search, doneFilter);
  }
  @Post('')
  async createTask(@Body() data: CreateTaskDto) {
    return await this.tasksService.createTask(data);
  }
  @Patch(':id')
  async changeTask(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return await this.tasksService.updateTask(data, id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}
