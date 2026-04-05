import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ObjectIdColumn, ObjectId } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  OPERATOR = 'operator',
}

@Entity('tbl_User')
export class UserEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ type: 'varchar', default: UserRole.OPERATOR })
  role: UserRole;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}