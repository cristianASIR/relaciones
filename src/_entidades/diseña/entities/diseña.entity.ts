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
    @ManyToOne(() => Practica, practica => practica.diseña)
    @JoinColumn({ name: 'idPractica'})
    practica: Practica;
    @ManyToOne(() => Profesor, profesor => profesor.diseña)
    @JoinColumn({ name: 'idProfesor'})
    profesor: Profesor;
    @ManyToOne(() => Profesor, profesor => profesor.diseña)
    profesordiseñaexamenteorico: Profesor[];

}
