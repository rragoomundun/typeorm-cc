import { Entity, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm'
import { Person } from './utils/Person';
import { Client } from './Client';

@Entity('banker')
export class Banker extends Person {
  @Column({ unique: true, length: 10 })
  employeeNumber: string;

  @ManyToMany(
    () => Client,
    {
      cascade: true
    }
  )
  @JoinTable({
    name: 'bankers_clients',
    joinColumn: {
      name: 'banker',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'id'
    }
  })
  clients: Client[];

  @CreateDateColumn()
  updatedAt: Date;
}