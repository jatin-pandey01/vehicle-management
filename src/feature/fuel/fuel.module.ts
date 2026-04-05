import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelEntity } from '../../entity/fuel.entity';
import { FuelService } from './fuel.service';
import { FuelController } from './fuel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FuelEntity])],
  providers: [FuelService],
  controllers: [FuelController],
  exports: [FuelService],
})
export class FuelModule {}