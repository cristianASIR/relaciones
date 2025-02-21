import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HaceService } from './hace.service';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';

@Controller('hace')
export class HaceController {
  constructor(private readonly haceService: HaceService) {}

  @Post()
  create(@Body() createHaceDto: CreateHaceDto) {
    return this.haceService.create(createHaceDto);
  }

  @Get()
  findAll() {
    return this.haceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.haceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHaceDto: UpdateHaceDto) {
    return this.haceService.update(+id, updateHaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.haceService.remove(+id);
  }
}
