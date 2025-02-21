import { Practica } from "src/_entidades/practica/entities/practica.entity";
import { Profesor } from "src/_entidades/profesor/entities/profesor.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Diseña {
    @PrimaryColumn()
    idPractica: number
    @PrimaryColumn()
    idProfesor: number
    @PrimaryColumn()
    fecha: Date

    //Tabla entre Practica y Profesor
    @ManyToOne(() => Practica, practica => practica.diseños)
    @JoinColumn({ name: 'idPractica'})
    practica: Practica;
    @ManyToOne(() => Profesor, profesor => profesor.diseños)
    @JoinColumn({ name: 'idProfesor'})
    profesor: Profesor;

}
