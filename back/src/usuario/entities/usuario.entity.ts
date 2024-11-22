import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  login: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  senha: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  funcao: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  regmatricula: number;

  @Column({ type: 'date' })
  @IsNotEmpty()
  @IsDate()
  nascimento: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}