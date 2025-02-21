import { Module } from '@nestjs/common';
import { RealizaService } from './realiza.service';
import { RealizaController } from './realiza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Realiza } from './entities/realiza.entity';
import { Practica } from '../practica/entities/practica.entity';
import { Alumno } from '../alumno/entities/alumno.entity';

@Module({
  //En estos ficheros se especifica a qué tabla hace referencia
  imports: [TypeOrmModule.forFeature([Realiza,Practica,Alumno])],
  controllers: [RealizaController],
  providers: [RealizaService],
})
export class RealizaModule { }
