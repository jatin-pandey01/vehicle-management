import { Column, Entity, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { EmployeeEntity } from "./employee.entity";
import { VehicleEntity } from "./vehicle.entity";

@Entity("tbl_EmployeeVehiclesMapping")
export class EmployeeVehiclesMappingEntity extends BaseEntity{

  @ManyToOne(() => EmployeeEntity, { nullable: true })
  @JoinColumn({name: "employeeId", referencedColumnName: "_id"})
  employee: EmployeeEntity;

  @ObjectIdColumn({ nullable: true })
  employeeId: ObjectId;

  @ManyToOne(() => VehicleEntity, { nullable: true })
  @JoinColumn({ name: "vehicleId", referencedColumnName: "_id" })
  vehicle: VehicleEntity;

  @ObjectIdColumn({ nullable: true })
  vehicleId: ObjectId;

  @Column({ type: "varchar", nullable: true })
  openingReading: string;

  @Column({ type: 'varchar', nullable: true })
  closingReading: string;

  @Column({ type: 'timestamp', nullable: true })
  assignedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  releasedAt: Date;

  @Column({ type: 'float', nullable: true })
  kmDriven: number;

  @Column({ type: 'varchar', nullable: true })
  project: string;

  @Column({ type: 'varchar', nullable: true })
  remarks: string;

  @Column({ type: 'boolean', nullable: true })
  isReturn: boolean;

  @Column({ type: 'timestamp', nullable: true, default: Date.now()})
  returnAt: boolean;
}