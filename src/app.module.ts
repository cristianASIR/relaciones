import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoModule } from './_entidades/alumno/alumno.module';
import { PracticaModule } from './_entidades/practica/practica.module';
import { ProfesorModule } from './_entidades/profesor/profesor.module';
import { ExamenteoricoModule } from './_entidades/examenteorico/examenteorico.module';
import { RealizaModule } from './_entidades/realiza/realiza.module';
import { HaceModule } from './_entidades/hace/hace.module';
import { DiseñaModule } from './_entidades/diseña/diseña.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
      //Utilizo solo 1 base de datos, no hay obligación de espeficicar a cual tiene que insertar los datos si esta está activa
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //Se utiliza la sincronización de los datos cuando estamos en desarrollo
      //Si esta en producción se mantiene desactivada para no provocar conflicto
      synchronize: true
    }),
    PracticaModule,
    AlumnoModule,
    ProfesorModule,
    ExamenteoricoModule,
    RealizaModule,
    HaceModule,
    DiseñaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
