import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) { }
  create(createCategoriaDto: CreateAlumnoDto) {
    return this.alumnoRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.alumnoRepository.find();
  }
  findOne(id: number) {
    return this.alumnoRepository.findOne({ where: { id: id } });
  }
  update(id: number, updateCategoriaDto: UpdateAlumnoDto) {
    return this.alumnoRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.alumnoRepository.delete(id);
  }
}