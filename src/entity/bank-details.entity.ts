import { Column, Entity, JoinColumn, ManyToOne, ObjectId, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { EmployeeEntity } from "./employee.entity";

@Entity("tbl_BankDetails")
export class BankDetailsEntity extends BaseEntity{
  @Column({ type: 'string', nullable: true })
  bankName: string;

  @Column({ type: 'string', nullable: true })
  accountHolderName: string;

  @Column({ type: 'string', nullable: true })
  accountNumber: string;

  @Column({ type: 'string', nullable: true })
  ifscCode: string;

  @Column({ type: 'string', nullable: true })
  accountType: string;

  @Column({ type: 'string', nullable: true })
  passbookPhoto: string;

  @ManyToOne(()=>EmployeeEntity, { nullable: true })
  @JoinColumn({name: "employeeId", referencedColumnName:"_id"})
  employee: EmployeeEntity;

  @Column({ nullable: true })
  employeeId: ObjectId;

}
