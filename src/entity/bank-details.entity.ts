import { Column, Entity, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { EmployeeEntity } from "./employee.entity";

@Entity("tbl_BankDetails")
export class BankDetailsEntity extends BaseEntity{
  @Column({ type: 'varchar', nullable: true })
  bankName: string;

  @Column({ type: 'varchar', nullable: true })
  accountHolderName: string;

  @Column({ type: 'varchar', nullable: true })
  accountNumber: string;

  @Column({ type: 'varchar', nullable: true })
  ifscCode: string;

  @Column({ type: 'varchar', nullable: true })
  accountType: string;

  @Column({ type: 'varchar', nullable: true })
  passbookPhoto: string;

  @ManyToOne(()=>EmployeeEntity, { nullable: true })
  @JoinColumn({name: "employeeId", referencedColumnName:"_id"})
  employee: EmployeeEntity;

  @ObjectIdColumn()
  employeeId: ObjectId;

}
