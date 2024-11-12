import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sala } from 'src/salas/entities/sala.entity';

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  disponivel: boolean;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'timestamp' })
  hora: Date;

  @ManyToOne(() => Sala, sala => sala.horarios)
  sala: Sala;
}
