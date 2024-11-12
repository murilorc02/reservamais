import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Sala } from 'src/salas/entities/sala.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id)
  usuario: Usuario;

  @ManyToOne(() => Sala, sala => sala.id)
  sala: Sala;

  @Column({ type: 'date' })
  data_reserva: Date;

  @Column({ type: 'timestamp' })
  hora_inicio: Date;

  @Column({ type: 'timestamp' })
  hora_fim: Date;

  @Column()
  status: string;
}
