import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiseñaService } from './diseña.service';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';

@Controller('diseña')
export class DiseñaController {
  constructor(private readonly diseñaService: DiseñaService) {}

  @Post()
  create(@Body() createDiseñaDto: CreateDiseñaDto) {
    return this.diseñaService.create(createDiseñaDto);
  }

  @Get()
  findAll() {
    return this.diseñaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diseñaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiseñaDto: UpdateDiseñaDto) {
    return this.diseñaService.update(+id, updateDiseñaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diseñaService.remove(+id);
  }
}
