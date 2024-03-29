import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskListService } from "./task-list.service";
import { TaskListDto } from "./task-list.dto";
import { Prisma } from "@prisma/client";

@Controller("task-list")
export class TaskListController {
    constructor(private readonly taskListService: TaskListService) {}

    @Get()
    async getAll() {
        return this.taskListService.getAll();
    }

    @Get(":id")
    async getById(@Param("id") id: string) {
        return this.taskListService.getById(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() dto: Prisma.TaskListCreateInput) {
        return this.taskListService.create(dto);
    }

    @Delete(":id")
    async deleteSingleTaskList(@Param("id") id: string) {
        return this.taskListService.delete(id);
    }
}
