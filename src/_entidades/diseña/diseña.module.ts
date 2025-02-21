import { Module } from '@nestjs/common';
import { DiseñaService } from './diseña.service';
import { DiseñaController } from './diseña.controller';

@Module({
  controllers: [DiseñaController],
  providers: [DiseñaService],
})
export class DiseñaModule {}
