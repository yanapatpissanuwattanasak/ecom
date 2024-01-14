import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cateCodeParent: string

  @Column()
  cateCode: string

  @Column()
  name: string

  @Column()
  cateLevel: number

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

}