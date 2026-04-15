import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleEntity } from '../../entity/vehicle.entity'
import { ObjectId } from 'mongodb';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(VehicleEntity)
    private vehicleRepo: Repository<VehicleEntity>
  ) {}

  public async findAll(){
    return await this.vehicleRepo.find();
    
  }

  public async findOne(id: string) {
    const vehicle = await this.vehicleRepo.findOne({ where: { _id : new ObjectId(id) } });
    console.log(vehicle);
    if (!vehicle) throw new NotFoundException(`Vehicle #${id} not found`);
    return vehicle;
  }

  public async create(vehicleDto: VehicleDto) {
    const vehicle = await this.vehicleRepo.create(vehicleDto);
    return await this.vehicleRepo.save(vehicle);
  }

  public async update(id: string, dto: VehicleDto) {
    await this.findOne(id);
    await this.vehicleRepo.update(id, dto);
    return this.findOne(id);
  }

  public async remove(id: string) {
    const vehicle = await this.findOne(id);
    await this.vehicleRepo.remove(vehicle);
    return { message: 'Vehicle deleted successfully' };
  }

  public async getStats() {
    const total = await this.vehicleRepo.count();
    const active = await this.vehicleRepo.count({ where: { status: 'active' as any } });
    const breakdown = await this.vehicleRepo.count({ where: { status: 'breakdown' as any } });
    const maintenance = await this.vehicleRepo.count({ where: { status: 'maintenance' as any } });
    return { total, active, breakdown, maintenance };
  }
}