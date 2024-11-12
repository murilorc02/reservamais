import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Bloco } from 'src/blocos/entities/bloco.entity';
import { Horario } from 'src/horarios/entities/horario.entity';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Bloco, bloco => bloco.id)
  bloco: Bloco;

  @OneToMany(() => Horario, horario => horario.sala)
  horarios: Horario[];
}
