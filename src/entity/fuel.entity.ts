import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ObjectIdColumn, ObjectId } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tbl_Fuel')
export class FuelEntity extends BaseEntity {

  @Column()
  vehicleId: number;

  @Column()
  vehicleNumber: string;

  @Column()
  date: string;

  @Column({ type: 'float' })
  openingReading: number;

  @Column({ type: 'float' })
  closingReading: number;

  @Column({ type: 'float' })
  kmDriven: number;

  @Column({ type: 'float' })
  fuelQuantity: number;

  @Column({ type: 'float', nullable: true })
  fuelCost: number;

  @Column({ nullable: true })
  supplier: string;

  @Column({ nullable: true })
  project: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  enteredBy: string;
}