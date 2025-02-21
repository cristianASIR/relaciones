import { Injectable } from '@nestjs/common';
import { CreateRealizaDto } from './dto/create-realiza.dto';
import { UpdateRealizaDto } from './dto/update-realiza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Realiza } from './entities/realiza.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RealizaService {
  constructor(
    @InjectRepository(Realiza)
    private realizaRepository: Repository<Realiza>,
  ) { }
  create(createRealizaDto: CreateRealizaDto) {
    return this.realizaRepository.save(createRealizaDto);
  }
  findAll() {
    return this.realizaRepository.find();
  }
  findOne(id: number) {
    return this.realizaRepository.findOne({ where: { idAlumno: id } });
  }
  update(id: number, updateRealizaDto: UpdateRealizaDto) {
    return this.realizaRepository.update(id, updateRealizaDto);
  }
  remove(id: number) {
    return this.realizaRepository.delete(id);
  }
}
