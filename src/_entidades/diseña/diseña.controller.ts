import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DiseñaService } from './diseña.service';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';

@Controller('diseña')
export class DiseñaController {
  constructor(private readonly diseñaService: DiseñaService) {}

  @Post()
  create(@Body() createCategoriaDto: CreateDiseñaDto) {
  return this.diseñaService.create(createCategoriaDto);
  }
  @Get()
  FindAll() { return this.diseñaService.findAll(); }
  @Get(':id')
  findOne(@Param('id') id: string) {
  return this.diseñaService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateDiseñaDto) {
  return this.diseñaService.update(+id, updateCategoriaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
  return this.diseñaService.remove(+id);
  }
 
}
