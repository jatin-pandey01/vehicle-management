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

  @Column({ unique: true })
  vehicleNumber: string;

  @Column({nullable: true, default: VehicleType.OTHER})
  vehicleType: string;

  @Column({nullable: true})
  vehicleBrand: string;

  @Column({nullable: true})
  vehicleModel: string;

  @Column({nullable: true})
  vehicleYear: number;

  @Column({ nullable:true, type: 'varchar', default: VehicleStatus.ACTIVE })
  status: VehicleStatus;

  @Column({ nullable: true })
  insuranceExpiryDate: Date;

  @Column({ nullable: true })
  registrationExpiryDate: Date;

  @Column({nullable: true})
  pocExpiryDate: Date;
}