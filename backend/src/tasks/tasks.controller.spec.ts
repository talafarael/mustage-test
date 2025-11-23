import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

const mockTaskservice = {};
describe('TaskController', () => {
  let taskController: TasksController;
  let taskService: TasksService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTaskservice,
        },
      ],
    }).compile();

    taskController = module.get<TasksController>(TasksController);
    taskService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(taskController).toBeDefined();
  });
});
