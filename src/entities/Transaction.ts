import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './Client';

export enum TransactionTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw'
}

@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TransactionTypes })
  type: string;

  @Column({ type: 'numeric' })
  amount: number;

  @ManyToOne(
    () => Client,
    client => client.transactions,
    {
      onDelete: "CASCADE"
    }
  )
  @JoinColumn({ name: 'clientId' })
  client: Client;
}