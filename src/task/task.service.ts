import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskDto } from "./task.dto";
// import { PrismaService } from "src/prisma.service";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async getById(id: string) {
        const task = await this.prisma.task.findUnique({
            where: {
                id: +id,
            },
        });

        if (!task) throw new NotFoundException("Task not found!");

        return task;
    }

    getAll() {
        return this.prisma.task.findMany();
    }

    // Исправить dto
    // create(dto: TaskDto) {
    create(dto: Prisma.TaskCreateInput) {
        return this.prisma.task.create({
            data: dto,
        });
    }

    async toggleDone(id: string) {
        const task = await this.getById(id);

        return this.prisma.task.update({
            where: { id: task.id },
            data: {
                isDone: !task.isDone,
            },
        });
    }

    async delete(id: string) {
        return this.prisma.task.delete({
            where: {
                id: +id,
            },
        });
    }
}
