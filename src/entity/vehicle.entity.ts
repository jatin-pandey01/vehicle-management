import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum VehicleStatus {
  ACTIVE = 'active',
  BREAKDOWN = 'breakdown',
  MAINTENANCE = 'maintenance',
  INACTIVE = 'inactive',
}

export enum VehicleType {
  EXCAVATOR = 'Excavator',
  TRUCK = 'Truck',
  JCB = 'JCB',
  COMPACTOR = 'Compactor',
  CRANE = 'Crane',
  TRACTOR = 'Tractor',
  OTHER = 'Other',
}

@Entity('tbl_Vehicle')
export class VehicleEntity extends BaseEntity {

  @Column({ type:'varchar', unique: true })
  vehicleNumber: string;

  @Column({ type:'varchar', nullable: true, default: VehicleType.OTHER})
  vehicleType: string;

  @Column({ type:'varchar', nullable: true})
  vehicleBrand: string;

  @Column({ type:'varchar', nullable: true})
  vehicleModel: string;

  @Column({ type:'varchar', nullable: true})
  vehicleYear: number;

  @Column({ nullable:true, type: 'varchar', default: VehicleStatus.ACTIVE })
  status: VehicleStatus;

  @Column({ type: 'timestamp', nullable: true })
  insuranceExpiryDate: Date;

  @Column({ type:'timestamp', nullable: true })
  registrationExpiryDate: Date;

  @Column({ type:'timestamp', nullable: true})
  pocExpiryDate: Date;
}