import { Injectable } from '@nestjs/common';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';

@Injectable()
export class DiseñaService {
  create(createDiseñaDto: CreateDiseñaDto) {
    return 'This action adds a new diseña';
  }

  findAll() {
    return `This action returns all diseña`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diseña`;
  }

  update(id: number, updateDiseñaDto: UpdateDiseñaDto) {
    return `This action updates a #${id} diseña`;
  }

  remove(id: number) {
    return `This action removes a #${id} diseña`;
  }
}
