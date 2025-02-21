import { Module } from '@nestjs/common';
import { DiseñaService } from './diseña.service';
import { DiseñaController } from './diseña.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diseña } from './entities/diseña.entity';
import { Practica } from '../practica/entities/practica.entity';
import { Profesor } from '../profesor/entities/profesor.entity';

@Module({
  //En estos ficheros se especifica a qué tabla hace referencia
  imports:[TypeOrmModule.forFeature([Diseña,Practica,Profesor])],
  controllers: [DiseñaController],
  providers: [DiseñaService],
})
export class DiseñaModule {}
