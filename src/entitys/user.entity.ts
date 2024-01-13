import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
      }

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

    async getUsername() {
        return this.username
    }

    async hashPassword() {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(this.password, saltOrRounds);
        this.password = hash
        return this.password
    }

    async checkPassword(password) {
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch
    }
}