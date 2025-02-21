import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorModule } from './profesor/profesor.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { PracticaModule } from './practica/practica.module';
import { ExamenteoricoModule } from './examenteorico/examenteorico.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
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
    ProfesorModule,
    AlumnosModule,
    PracticaModule,
    ExamenteoricoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
