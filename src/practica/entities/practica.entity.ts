import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Practica {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()
    dificultad: string;

    //Un profesor pudee diseñar varias prácticas
    @ManyToMany(() => Profesor, (profesor) => profesor.practicas)
    profesor: Profesor[];

    //Cada práctica pertenece solo a 1 alumno
    @OneToMany(() => Alumno, (alumno) => alumno.practica)
    alumnos: Alumno[];
}
