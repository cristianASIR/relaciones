import { Injectable } from '@nestjs/common';
import { CreateExamenteoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenteoricoDto } from './dto/update-examenteorico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Examenteorico } from './entities/examenteorico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamenteoricoService {
  constructor(
    @InjectRepository(Examenteorico)
    private examenteoricoRepository: Repository<Examenteorico>,
  ) { }
  create(createCategoriaDto: CreateExamenteoricoDto) {
    return this.examenteoricoRepository.save(createCategoriaDto);
  }
  findAll() {
    return this.examenteoricoRepository.find();
  }
  findOne(id: number) {
    return this.examenteoricoRepository.findOne({ where: { id: id } });
  }
  update(id: number, updateCategoriaDto: UpdateExamenteoricoDto) {
    return this.examenteoricoRepository.update(id, updateCategoriaDto);
  }
  remove(id: number) {
    return this.examenteoricoRepository.delete(id);
  }
}
