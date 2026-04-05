import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';

export enum ExpenseCategory {
  FUEL = 'fuel',
  MAINTENANCE = 'maintenance',
  LABOUR = 'labour',
  MATERIAL = 'material',
  TRANSPORT = 'transport',
  MISCELLANEOUS = 'miscellaneous',
}

@Entity('tbl_Expenses')
export class ExpenseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  date: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ nullable: true })
  project: string;

  @Column({ nullable: true })
  vehicleId: number;

  @Column({ nullable: true })
  paymentMode: string;

  @Column({ nullable: true })
  billNumber: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  addedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}