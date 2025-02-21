import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExamenteoricoService } from './examenteorico.service';
import { CreateExamenteoricoDto } from './dto/create-examenteorico.dto';
import { UpdateExamenteoricoDto } from './dto/update-examenteorico.dto';

@Controller('examenteorico')
export class ExamenteoricoController {
  constructor(private readonly examenteoricoService: ExamenteoricoService) { }

  @Post()
  create(@Body() createCategoriaDto: CreateExamenteoricoDto) {
    return this.examenteoricoService.create(createCategoriaDto);
  }
  @Get()
  FindAll() { return this.examenteoricoService.findAll(); }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenteoricoService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateExamenteoricoDto) {
    return this.examenteoricoService.update(+id, updateCategoriaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenteoricoService.remove(+id);
  }

}
