import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ObjectIdColumn, ObjectId, BaseEntity } from 'typeorm';

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  HALF_DAY = 'half_day',
  ON_LEAVE = 'on_leave',
}

@Entity('tbl_Attendance')
export class AttendanceEntity extends BaseEntity {

  @Column()
  employeeName: string;

  @Column({ nullable: true })
  employeeId: string;

  @Column()
  designation: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  inTime: string;

  @Column({ nullable: true })
  outTime: string;

  @Column({ type: 'float', nullable: true })
  workingHours: number;

  @Column({ type: 'varchar', default: AttendanceStatus.PRESENT })
  status: AttendanceStatus;

  @Column({ nullable: true })
  project: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  markedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}