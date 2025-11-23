import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/changeTask.dto';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async getTasks(search?: string, done?: boolean): Promise<Task[]> {
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' as const } },
        { description: { contains: search, mode: 'insensitive' as const } },
      ];
    }

    if (done !== undefined) {
      where.done = done;
    }

    return this.prisma.task.findMany({
      where,
      orderBy: [{ createdAt: 'desc' }, { id: 'asc' }],
    });
  }
  async createTask(data: CreateTaskDto): Promise<Task> {
    try {
      return this.prisma.task.create({ data });
    } catch (e) {
      console.error(e);
      throw new Error('Create task  failed');
    }
  }
  async updateTask(data: UpdateTaskDto, id: string): Promise<Task> {
    try {
      return this.prisma.task.update({
        where: {
          id: id,
        },
        data,
      });
    } catch (e) {
      console.error(e);
      throw new Error('Create task  failed');
    }
  }
  async deleteTask(taskId: string): Promise<Task> {
    try {
      return this.prisma.task.delete({
        where: { id: taskId },
      });
    } catch (e) {
      console.error(e);
      throw new Error('Delete task failed');
    }
  }
}
