import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleEntity } from '../../entity/vehicle.entity'
import { ObjectId } from 'mongodb';
import { VehicleDto } from './dto/vehicle.dto';
import { AppLogger } from 'src/service/logger.service';

@Injectable()
export class VehiclesService {
  
  private appLogger = new AppLogger();

  constructor(
    @InjectRepository(VehicleEntity)
    private vehicleRepo: Repository<VehicleEntity>
  ) {}

  public async findAll(){
    try {
      return await this.vehicleRepo.find();
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
    
  }

  public async findOne(id: string) {
    try {
      const vehicle = await this.vehicleRepo.findOne({ where: { _id : new ObjectId(id) } });
      console.log(vehicle);
      if (!vehicle) throw new NotFoundException(`Vehicle #${id} not found`);
      return vehicle;
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async create(vehicleDto: VehicleDto) {
    try {
      const vehicle = await this.vehicleRepo.create(vehicleDto);
      return await this.vehicleRepo.save(vehicle);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async update(id: string, dto: VehicleDto) {
    try {
      const vehicle = await this.vehicleRepo.findOne({
        where:{
          _id : new ObjectId(id)
        }
      });
      if(!vehicle){
        throw new NotFoundException(`Vehicle not found`);
      }

      Object.assign(vehicle, dto);
      return await this.vehicleRepo.save(vehicle);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async remove(id: string) {
    try {
      const vehicle = await this.vehicleRepo.findOne({
        where:{
          _id : new ObjectId(id)
        }
      });
      if(!vehicle){
        throw new NotFoundException("Vehicle not found");
      }
      await this.vehicleRepo.remove(vehicle);
      return { message: 'Vehicle deleted successfully' };
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async getStats() {
    try {
      const total = await this.vehicleRepo.count();
      const active = await this.vehicleRepo.count({ where: { status: 'active' as any } });
      const breakdown = await this.vehicleRepo.count({ where: { status: 'breakdown' as any } });
      const maintenance = await this.vehicleRepo.count({ where: { status: 'maintenance' as any } });
      return { total, active, breakdown, maintenance };
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }
}