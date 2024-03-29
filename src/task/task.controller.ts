import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskDto } from "./task.dto";
import { Prisma } from "@prisma/client";

// Указан путь /tasks
@Controller("tasks")
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    /* корневой путь  */
    @Get()
    async getAll() {
        return this.taskService.getAll();
    }

    @Get(":id")
    async getById(@Param("id") id: string) {
        return this.taskService.getById(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    // Исправить dto
    // async create(@Body() dto: TaskDto) {
    async create(@Body() dto: Prisma.TaskCreateInput) {
        return this.taskService.create(dto);
    }

    @Patch(":id")
    async toggleDone(@Param("id") id: string) {
        return this.taskService.toggleDone(id);
    }

    @Delete(":id")
    async deleteSingleTaskList(@Param("id") id: string) {
        return this.taskService.delete(id);
    }
}
