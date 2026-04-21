import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BankDetailsEntity } from "./bank-details.entity";

@Entity('tbl_Employee')
export class EmployeeEntity extends BaseEntity{
  @Column({ type: 'string', nullable: true })
  employeeName: string;

  @Column({ type: 'string', nullable: true })
  mobileNumber: string;

  @Column({ type: 'string', nullable: true })
  dateOfBirth: string;

  @Column({ type: 'string', nullable: true })
  gender: string;

  @Column({ type: 'string', nullable: true })
  profilePhoto: string;

  @Column({ type: 'string', nullable: true })
  licenseNumber: string;

  @Column({ type: 'string', nullable: true })
  licenseExpiryDate: string;

  @Column({ type: 'string', nullable: true })
  licensePhoto: string;

  @Column({ type: 'string', nullable: true })
  aadharCard: string;

  @Column({ type: 'string', nullable: true })
  panCard: string;

  @OneToMany(() => BankDetailsEntity, bankDetails => bankDetails.employeeId)
  bankDetails: BankDetailsEntity[];

}