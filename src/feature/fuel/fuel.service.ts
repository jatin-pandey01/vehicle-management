import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuelEntity } from '../../entity/fuel.entity';
import {ObjectId} from "mongodb";

@Injectable()
export class FuelService {
  constructor(
    @InjectRepository(FuelEntity)
    private fuelRepo: Repository<FuelEntity>,
  ) {}

  findAll(vehicleId?: number, startDate?: string, endDate?: string) {
    const query = this.fuelRepo.createQueryBuilder('fuel').orderBy('fuel.date', 'DESC');
    if (vehicleId) query.andWhere('fuel.vehicleId = :vehicleId', { vehicleId });
    if (startDate) query.andWhere('fuel.date >= :startDate', { startDate });
    if (endDate) query.andWhere('fuel.date <= :endDate', { endDate });
    return query.getMany();
  }

  async findOne(id: string) {
    const entry = await this.fuelRepo.findOne({ where: { _id: new ObjectId(id) } });
    if (!entry) throw new NotFoundException(`Fuel entry #${id} not found`);
    return entry;
  }

  create(dto: Partial<FuelEntity>) {
    const kmDriven = (dto.closingReading || 0) - (dto.openingReading || 0);
    const entry = this.fuelRepo.create({ ...dto, kmDriven });
    return this.fuelRepo.save(entry);
  }

  async update(id: string, dto: Partial<FuelEntity>) {
    await this.findOne(id);
    if (dto.closingReading && dto.openingReading) {
      dto.kmDriven = dto.closingReading - dto.openingReading;
    }
    await this.fuelRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const entry = await this.findOne(id);
    await this.fuelRepo.remove(entry);
    return { message: 'Fuel entry deleted' };
  }

  async getSummary() {
    const result = await this.fuelRepo
      .createQueryBuilder('fuel')
      .select('SUM(fuel.fuelQuantity)', 'totalFuel')
      .addSelect('SUM(fuel.fuelCost)', 'totalCost')
      .addSelect('SUM(fuel.kmDriven)', 'totalKm')
      .getRawOne();
    return result;
  }
}