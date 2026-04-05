import { Column, CreateDateColumn, DeleteDateColumn, ObjectId, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity{

  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ nullable: true})
  isActive: boolean;

  @CreateDateColumn({ nullable: true})
  createdAt: Date;

  @UpdateDateColumn({ nullable: true})
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true})
  deletedAt: Date;

}