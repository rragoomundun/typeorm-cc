import { Entity, Column, CreateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { Person } from './utils/Person';
import { Banker } from './Banker';
import { Transaction } from './Transaction';

@Entity('client')
export class Client extends Person {
  @Column({ type: 'numeric' })
  balance: number;

  @Column({ default: true, name: 'active' })
  isActive: boolean;

  @Column({ type: 'simple-json', nullable: true })
  additionalInfo: {
    age: number;
    hairColor: string;
  }

  @Column({ type: 'simple-array', default: [] })
  familyMembers: string[];

  @OneToMany(
    () => Transaction,
    transaction => transaction.client
  )
  transactions: Transaction[];

  @ManyToMany(
    () => Banker,
    {
      cascade: true
    }
  )
  @JoinTable({
    name: 'bankers_clients',
    joinColumn: {
      name: 'client',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'banker',
      referencedColumnName: 'id'
    }
  })
  bankers: Banker[];

  @CreateDateColumn()
  updatedAt: Date;
}