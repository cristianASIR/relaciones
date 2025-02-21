import { Injectable } from '@nestjs/common';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Diseña } from './entities/diseña.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiseñaService {
  constructor(
    @InjectRepository(Diseña)
    private diseñaRepository: Repository<Diseña>,
  ) { }
  create(createCategoriaDto: CreateDiseñaDto) {
    return this.diseñaRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.diseñaRepository.find();
  }
  findOne(id: number) {
    return this.diseñaRepository.findOne({ where: { idPractica: id } });
  }
  update(id: number, updateCategoriaDto: UpdateDiseñaDto) {
    return this.diseñaRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.diseñaRepository.delete(id);
  }
}