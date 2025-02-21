import { Injectable } from '@nestjs/common';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hace } from './entities/hace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HaceService {
  constructor(
    @InjectRepository(Hace)
    private haceRepository: Repository<Hace>,
  ) { }
  create(createCategoriaDto: CreateHaceDto) {
    return this.haceRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.haceRepository.find();
  }
  findOne(id: number) {
    return this.haceRepository.findOne({ where: { idAlumno: id } });
  }
  // findOne2(id: number) {
  //   return this.haceRepository.findOne({ where: { idExamenTeorico: id } });
  // }
  update(id: number, updateCategoriaDto: UpdateHaceDto) {
    return this.haceRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.haceRepository.delete(id);
  }
}
