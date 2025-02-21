import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private ProfesorRepository: Repository<Profesor>,
  ) { }
  create(createCategoriaDto: CreateProfesorDto) {
    return this.ProfesorRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.ProfesorRepository.find();
  }
  findOne(id: number) {
    return this.ProfesorRepository.findOne({ where: { id: id } });
  }
  update(id: number, updateCategoriaDto: UpdateProfesorDto) {
    return this.ProfesorRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.ProfesorRepository.delete(id);
  }
}
