import { Diseña } from "src/_entidades/diseña/entities/diseña.entity";
import { Realiza } from "src/_entidades/realiza/entities/realiza.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Practica {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    titulo: string
    @Column()
    dificultad: string


    //Relaciones N:N entre Practica con Alumno y Profesor
    @OneToMany(() => Realiza, re => re.idPractica)
    alumnorealizapractica: Realiza[];
    @OneToMany(() => Diseña, di => di.practica)
    diseña: Diseña[];

    //ChatGPT
    // @OneToMany(() => AlumnoRealizaPractica, (realiza) => realiza.practica)
    // realiza: AlumnoRealizaPractica[];

    // @OneToMany(() => ProfesorDisenaPractica, (disena) => disena.practica)
    // disena: ProfesorDisenaPractica[];
}