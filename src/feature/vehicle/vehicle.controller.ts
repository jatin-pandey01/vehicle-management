import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VehiclesService } from './vehicle.service'
import { ApiTags } from '@nestjs/swagger';
import { VehicleDto } from './dto/vehicle.dto';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  public async findAll(){
    return await this.vehiclesService.findAll();
  }

  @Get('stats')
  public async getStats() {
    return this.vehiclesService.getStats();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    console.log(id);
    
    return this.vehiclesService.findOne(id);
  }

  @Post()
  public async create(@Body() body: VehicleDto) {
    return this.vehiclesService.create(body);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() body: VehicleDto) {
    return this.vehiclesService.update(id, body);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}