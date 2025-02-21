import { Injectable } from '@nestjs/common';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';

@Injectable()
export class HaceService {
  create(createHaceDto: CreateHaceDto) {
    return 'This action adds a new hace';
  }

  findAll() {
    return `This action returns all hace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hace`;
  }

  update(id: number, updateHaceDto: UpdateHaceDto) {
    return `This action updates a #${id} hace`;
  }

  remove(id: number) {
    return `This action removes a #${id} hace`;
  }
}
