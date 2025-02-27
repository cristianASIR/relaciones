import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { AutorService } from './autor.service';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) { }

  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
