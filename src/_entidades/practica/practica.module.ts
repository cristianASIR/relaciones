import { Module } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';

@Module({
  //En estos ficheros se especifica a qué tabla hace referencia
  imports: [TypeOrmModule.forFeature([Practica])],
  controllers: [PracticaController],
  providers: [PracticaService],
})
export class PracticaModule { }
