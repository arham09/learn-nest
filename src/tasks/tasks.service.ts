import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid'
import { CreateTaskDto } from './dto/create.dto';
import { UpdateTaskDto } from './dto/update.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
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

  updateTask(id: string, data: UpdateTaskDto): Task {
    const task: Task = this.getTaskById(id);
    console.log(data);
    task.status = data.status;
    return task;
  }
}
