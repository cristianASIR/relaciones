import { Hace } from "src/_entidades/hace/entities/hace.entity";
import { Realiza } from "src/_entidades/realiza/entities/realiza.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nif: string
    @Column()
    grupo: string
    @Column()
    nombre: string
    @Column()
    ap1: string
    @Column()
    ap2: string

    //Relaciones N:N entre Alumno con Practica y ExamenTeorico
    @OneToMany(() => Realiza, re => re.idAlumno)
    hecho: Realiza[];
    @OneToMany(() => Hace, ha => ha.idAlumno)
    examenes: Hace[];

    //ChatGPT
    // @OneToMany(() => AlumnoRealizaPractica, (realiza) => realiza.alumno)
    // realiza: AlumnoRealizaPractica[];

    // @OneToMany(() => AlumnoHaceExamenTeorico, (hace) => hace.alumno)
    // hace: AlumnoHaceExamenTeorico[];
}