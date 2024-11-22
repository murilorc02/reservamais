import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.usuarioService.findByUsername(loginDto.login);

    if (!user || user.senha !== loginDto.senha) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return {
      message: 'Login bem-sucedido',
      user,
    };
  }

}
