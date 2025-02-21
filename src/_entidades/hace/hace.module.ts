import { Module } from '@nestjs/common';
import { HaceService } from './hace.service';
import { HaceController } from './hace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hace } from './entities/hace.entity';
import { Alumno } from '../alumno/entities/alumno.entity';
import { Examenteorico } from '../examenteorico/entities/examenteorico.entity';

@Module({
  //En estos ficheros se especifica a qué tabla hace referencia
  imports: [TypeOrmModule.forFeature([Hace,Alumno,Examenteorico])],
  controllers: [HaceController],
  providers: [HaceService],
})
export class HaceModule { }
