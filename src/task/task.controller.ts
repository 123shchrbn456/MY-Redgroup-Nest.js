import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskDto } from "./task.dto";

// Указан путь /tasks
@Controller("tasks")
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    /* корневой путь  */
    @Get()
    // async getTasks() {
    async getAll() {
        return this.taskService.getAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() dto: TaskDto) {
        return this.taskService.create(dto);
    }

    @Patch(":id")
    async toggleDone(@Param("id") id: string) {
        return this.taskService.toggleDone(id);
    }
}
