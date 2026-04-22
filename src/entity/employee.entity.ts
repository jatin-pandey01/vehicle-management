import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BankDetailsEntity } from "./bank-details.entity";

@Entity('tbl_Employee')
export class EmployeeEntity extends BaseEntity{
  @Column({ type: 'varchar', nullable: true })
  employeeName: string;

  @Column({ type: 'varchar', nullable: true })
  mobileNumber: string;

  @Column({ type: 'varchar', nullable: true })
  dateOfBirth: string;

  @Column({ type: 'varchar', nullable: true })
  gender: string;

  @Column({ type: 'varchar', nullable: true })
  profilePhoto: string;

  @Column({ type: 'varchar', nullable: true })
  licenseNumber: string;

  @Column({ type: 'varchar', nullable: true })
  licenseExpiryDate: string;

  @Column({ type: 'varchar', nullable: true })
  licensePhoto: string;

  @Column({ type: 'varchar', nullable: true })
  aadharCard: string;

  @Column({ type: 'varchar', nullable: true })
  panCard: string;

  @OneToMany(() => BankDetailsEntity, bankDetails => bankDetails.employee)
  bankDetails: BankDetailsEntity[];

}