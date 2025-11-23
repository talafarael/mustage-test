import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskDto } from './dto/changeTask.dto';
import { taskMockData } from 'test/fixtures/tasks.fixture';
const { create, update, updateNotFound } = taskMockData;
const prismaMock = {
  task: {
    findMany: jest.fn().mockReturnValue([]),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('TaskService', () => {
  let taskService: TasksService;
  let prismaService: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();
    prismaService = module.get<PrismaService>(PrismaService);
    taskService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(taskService).toBeDefined();
  });
  //create
  it('create task', async () => {
    prismaMock.task.create.mockResolvedValue(create.expected);
    const createdTask = await taskService.createTask(create.dto);

    expect(createdTask).toEqual(create.expected);
  });
  it('update task', async () => {
    prismaMock.task.update.mockResolvedValue(update.expected);
    const updateTask = await taskService.updateTask(
      update.dto,
      update.targetId,
    );

    expect(updateTask).toEqual(update.expected);
  });
});
