import { Injectable, NotFoundException } from "@nestjs/common";
// import { PrismaService } from "src/prisma.service";
import { PrismaService } from "../prisma.service";
import { TaskListDto } from "./task-list.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class TaskListService {
    constructor(private prisma: PrismaService) {}

    getAll() {
        return this.prisma.taskList.findMany({
            include: {
                description: true,
                tasks: true,
                tags: true,
            },
        });
    }

    async getById(id: string) {
        const task = await this.prisma.taskList.findUnique({
            where: {
                id: +id,
            },
            include: {
                description: true,
                tasks: true,
                tags: true,
            },
        });

        if (!task) throw new NotFoundException("Task List not found!");

        return task;
    }

    create(dto: Prisma.TaskListCreateInput) {
        return this.prisma.taskList.create({
            data: dto,
        });
    }

    // Body intance of Create Request
    /*
    {
        "name": "First Task List",
        "status": "OLD",
        "description": {
            "create": {
                "content": "Cars List "
            }
        },
        "tags": {
            "create": [
                {
                    "content": "Cars"
                },
                {
                    "content": "Vehicles"
                },
                {
                    "content": "Driving"
                }
            ]
        }
    }
    */

    async delete(id: string) {
        return this.prisma.taskList.delete({
            where: {
                id: +id,
            },
        });
    }

    // async remove(id: number) {
    //     return this.databaseService.employee.delete({
    //       where: {
    //         id,
    //       }
    //     })
    //   }
}
