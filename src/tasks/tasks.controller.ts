/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.dto';
import { UpdateTaskDto } from './dto/update.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string): any {
    this.tasksService.removeTask(id);
    return { message: 'Task has been deleted' }
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  @UsePipes(ValidationPipe)
  updateTask(@Param('id') id: string,@Body() updateTaskDto: UpdateTaskDto): Task {
    return this.tasksService.updateTask(id, updateTaskDto);
  }
}
