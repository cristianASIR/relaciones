import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Autor } from "./entities/autor.entity"
import { Repository } from "typeorm"
import { CreateAutorDto } from "./dto/create-autor.dto"
import { UpdateAutorDto } from "./dto/update-autor.dto"

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ) { }
  async create(createLibroDto: CreateAutorDto):
    Promise<Autor> {
    const libro = this.autorRepository.create(createLibroDto)
    return this.autorRepository.save(libro)
  }
  async findAll(): Promise<Autor[]> {
    return this.autorRepository.find()
  }
  async findOne(id: number): Promise<Autor | null> {
    return this.autorRepository.findOne({ where: { id } })
    }
    async update(id: number, updateAutorDto: UpdateAutorDto): Promise<Autor | null> {
    await this.autorRepository.update(id, updateAutorDto)
    return this.autorRepository.findOne({ where: { id } })
    }
  async remove(id: number): Promise<void> {
    await this.autorRepository.delete(id)
  }
}
