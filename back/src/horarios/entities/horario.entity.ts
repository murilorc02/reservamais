import { Instituicao } from 'src/instituicoes/entities/instituicao.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  hora: string;

  @ManyToOne(() => Instituicao, (instituicao) => instituicao.horarios, { onDelete: 'CASCADE' })
  instituicao: Instituicao;

}
