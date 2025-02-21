import { Module } from '@nestjs/common';
import { HaceService } from './hace.service';
import { HaceController } from './hace.controller';

@Module({
  controllers: [HaceController],
  providers: [HaceService],
})
export class HaceModule {}
