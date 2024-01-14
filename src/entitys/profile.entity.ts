import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({ type: 'timestamptz', nullable: true })
    @CreateDateColumn()
    createdAt: Date

    @Column({ type: 'timestamptz', nullable: true })
    @UpdateDateColumn()
    updatedAt: Date
}