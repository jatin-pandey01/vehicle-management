import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from './../../entity/vehicle.entity';
import { VehiclesService } from './vehicle.service';
import { VehiclesController } from './vehicle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  providers: [VehiclesService],
  controllers: [VehiclesController],
  exports: [VehiclesService],
})
export class VehiclesModule {}