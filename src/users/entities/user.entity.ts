import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  firstname: string;
  @Column({ nullable: false })
  lastname: string;
  @Column({ nullable: false, unique: true })
  username: string;
  @Column({ nullable: false })
  password: string;
  @Column({ nullable: false })
  verified: boolean;
}
