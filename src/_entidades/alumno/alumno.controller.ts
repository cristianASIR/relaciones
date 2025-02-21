import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }

  @Post()
  create(@Body() createCategoriaDto: CreateAlumnoDto) {
    return this.alumnoService.create(createCategoriaDto);
  }
  @Get()
  FindAll() { return this.alumnoService.findAll(); }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateAlumnoDto) {
    return this.alumnoService.update(+id, updateCategoriaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoService.remove(+id);
  }

}
