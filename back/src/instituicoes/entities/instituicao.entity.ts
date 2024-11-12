import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Instituicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
