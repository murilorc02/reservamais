import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Bloco } from 'src/blocos/entities/bloco.entity';

@Entity()
export class Instituicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Horario, (horario) => horario.instituicao)
  horarios: Horario[];

  @OneToMany(() => Bloco, (bloco) => bloco.instituicao)
  blocos: Bloco[];
}
