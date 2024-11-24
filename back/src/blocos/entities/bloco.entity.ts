import { Instituicao } from 'src/instituicoes/entities/instituicao.entity';
import { Sala } from 'src/salas/entities/sala.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Bloco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Instituicao, (instituicao) => instituicao.blocos, { onDelete: 'CASCADE' })
  instituicao: Instituicao;

  @OneToMany(() => Sala, (sala) => sala.bloco)
  salas: Sala[];
}
