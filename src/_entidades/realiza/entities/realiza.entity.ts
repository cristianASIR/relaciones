import { Alumno } from "src/_entidades/alumno/entities/alumno.entity";
import { Practica } from "src/_entidades/practica/entities/practica.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Realiza {
    @PrimaryColumn()
    idPractica: number
    @PrimaryColumn()
    idAlumno: number
    @PrimaryColumn()
    fecha: Date
    @Column()
    nota: number

    @ManyToOne(() => Practica, pr => pr.realizaciones)
    @JoinColumn({ name: 'idPractica'})
    pr: Practica[];
    @ManyToOne(() => Alumno, al => al.hecho)
    @JoinColumn({ name: 'idAlumno'})
    al: Practica;
    
}
