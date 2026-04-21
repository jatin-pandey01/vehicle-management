import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { FuelService } from './fuel.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('fuel')
@ApiBearerAuth()
@Controller('fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

  @Get()
  findAll(
    @Query('vehicleId') vehicleId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.fuelService.findAll(vehicleId ? +vehicleId : undefined, startDate, endDate);
  }

  @Get('summary')
  getSummary() {
    return this.fuelService.getSummary();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuelService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.fuelService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.fuelService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuelService.remove(id);
  }
}