import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { VehiclesService } from './vehicle.service'
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { VehicleDto } from './dto/vehicle.dto';

@ApiTags('vehicles')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get('stats')
  getStats() {
    return this.vehiclesService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Post()
  create(@Body() body: VehicleDto) {
    return this.vehiclesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: VehicleDto) {
    return this.vehiclesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}