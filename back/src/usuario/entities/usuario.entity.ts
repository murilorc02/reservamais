import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  login: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  funcao: string;

  @Column()
  regmatricula: number;

  @Column({ type: 'date' })
  nascimento: Date;

  @Column()
  telefone: string;

  @Column()
  email: string;
}