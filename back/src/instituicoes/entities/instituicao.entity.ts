import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
export class Instituicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  nome: string;
}
