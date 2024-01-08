import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, IsNull } from 'typeorm'
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: "text", nullable: true})
  discription: string;

  @Column()
  price: number

  @Column()
  quantity: number

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date
}
