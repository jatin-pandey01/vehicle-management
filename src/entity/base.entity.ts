import { Column, CreateDateColumn, DeleteDateColumn, ObjectId, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity{

  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ nullable: true})
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: true})
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true})
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true})
  deletedAt: Date;

}