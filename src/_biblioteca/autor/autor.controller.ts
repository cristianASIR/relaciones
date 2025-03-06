import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { AutorService } from './autor.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) { }

  @Post()
    @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)

  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)

  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
