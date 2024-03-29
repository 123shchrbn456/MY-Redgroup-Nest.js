import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaskModule } from "./task/task.module";
import { TaskListModule } from './task-list/task-list.module';

//Модуль это типо плата на которую мы всё коннектим, условно как материнская плата в ПК

// Middleware это прослойка между контроллером и client-side_ом
// (Чаще всего нужен для авторизации и тд, например в моменте проверяем request в него записываем нашего юзера и потом этого юзера можем распаковать в контроллере)

@Module({
    imports: [TaskModule, TaskListModule],
    // Контроллер отвечает лишь за получение данных, за их валидацию и за их отдачу(таймкод 8:00)
    controllers: [AppController],
    // Сервисы(Провайдеры) отвечают за выполнение какой то логики
    providers: [AppService],
})
export class AppModule {}

// Все комманды по очереди
// nest new REDGROUP-nestjs-course
// Практика начинается с 11:25
// nest g resource task --no-spec

// dto(Data Transfer Object) это класс или обьект который описывает входящие данные
