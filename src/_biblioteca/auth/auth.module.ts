import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../user/user.module';

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: 'tu_secreto_jwt', // No utilizar directamente la clave, mejor una variable
            signOptions: { expiresIn: '60m' }, //Tiempo de sesion
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService] //Hay que añadir el export en todos
})

export class AuthModule { }
