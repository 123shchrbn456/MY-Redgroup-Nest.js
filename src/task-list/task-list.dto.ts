import { IsString } from "class-validator";

export class TaskListDto {
    @IsString()
    name: "string";
}
