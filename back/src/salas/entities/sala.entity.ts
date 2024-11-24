import { Bloco } from 'src/blocos/entities/bloco.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Bloco, (bloco) => bloco.salas, { onDelete: 'CASCADE' })
  bloco: Bloco;

}
