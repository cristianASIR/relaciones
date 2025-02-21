import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private practicaRepository: Repository<Practica>,
  ) { }
  create(createCategoriaDto: CreatePracticaDto) {
    return this.practicaRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.practicaRepository.find();
  }
  findOne(id: number) {
    return this.practicaRepository.findOne({ where: { id: id } });
  }
  update(id: number, updateCategoriaDto: UpdatePracticaDto) {
    return this.practicaRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.practicaRepository.delete(id);
  }
}
