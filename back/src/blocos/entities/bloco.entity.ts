import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bloco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
