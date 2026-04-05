import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity('tbl_DailyProgress')
export class DailyProgressEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  date: string;

  @Column()
  project: string;

  @Column()
  workDescription: string;

  @Column({ type: 'float', nullable: true })
  targetQuantity: number;

  @Column({ type: 'float', nullable: true })
  achievedQuantity: number;

  @Column({ nullable: true })
  unit: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  supervisorName: string;

  @Column({ nullable: true })
  vehiclesDeployed: string;

  @Column({ nullable: true })
  labourCount: number;

  @Column({ nullable: true })
  issues: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  submittedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}