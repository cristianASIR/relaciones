import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // O el motor de base de datos que uses
      host: process.env.HOST,
      port: 3306,
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      
      //Pongo las entidades manualmente para no cargar ficheros no deseados y mejorar la carga inicial del proyecto
      entities: [
        Alumno,
        Profesor,
        Practica,
        ExamenTeorico,
        AlumnoRealizaPractica, // Agregar aquí
        AlumnoHaceExamenTeorico // Agregar aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
