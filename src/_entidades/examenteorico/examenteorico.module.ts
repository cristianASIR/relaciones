import { Module } from '@nestjs/common';
import { ExamenteoricoService } from './examenteorico.service';
import { ExamenteoricoController } from './examenteorico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examenteorico } from './entities/examenteorico.entity';

@Module({
  //En estos ficheros se especifica a qué tabla hace referencia
  imports: [TypeOrmModule.forFeature([Examenteorico])],
  controllers: [ExamenteoricoController],
  providers: [ExamenteoricoService],
})
export class ExamenteoricoModule { }
