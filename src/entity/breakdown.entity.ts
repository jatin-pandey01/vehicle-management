import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

export enum BreakdownStatus {
  REPORTED = 'reported',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
}

@Entity('tbl_Breakdown')
export class BreakdownEntity {
  @ObjectIdColumn()
  _id: number;

  @Column()
  vehicleId: number;

  @Column()
  vehicleNumber: string;

  @Column()
  reportedDate: string;

  @Column()
  reportedTime: string;

  @Column()
  reason: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'varchar', default: BreakdownStatus.REPORTED })
  status: BreakdownStatus;

  @Column({ nullable: true })
  resolvedDate: string;

  @Column({ nullable: true })
  resolvedTime: string;

  @Column({ nullable: true })
  repairCost: number;

  @Column({ nullable: true })
  resolvedBy: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  reportedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}