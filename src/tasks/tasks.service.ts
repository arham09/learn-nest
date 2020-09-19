import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid'
import { CreateTaskDto } from './dto/create.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(data: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      title : data.title,
      description: data.description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);

    return task;
  }
}
