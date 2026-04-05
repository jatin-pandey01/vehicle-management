import { Column, JoinColumn, ManyToOne, ObjectId } from "typeorm";
import { BaseEntity } from "./base.entity";
import { VehicleEntity } from "./vehicle.entity";

export class VehicleEntryEntity extends BaseEntity{

  @Column({ nullable: true })
  driverName: string;

  @Column({ nullable: true })
  driverMobileNumber: string;

  @Column({ nullable: true })
  initialFuel: string;

  @ManyToOne(() => VehicleEntity, vehicle => vehicle._id)
  @JoinColumn()
  vehicle: VehicleEntity

}