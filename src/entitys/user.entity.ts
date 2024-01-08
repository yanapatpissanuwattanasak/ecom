import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({ type: 'timestamptz', nullable: true })
    lastLogin: Date

    @Column({ type: 'timestamptz', nullable: true })
    @CreateDateColumn()
    createdAt: Date

    @Column({ type: 'timestamptz', nullable: true })
    @UpdateDateColumn()
    updatedAt: Date
}