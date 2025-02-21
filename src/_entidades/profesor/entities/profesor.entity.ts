import { Diseña } from "src/_entidades/diseña/entities/diseña.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profesor {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nif: string
    @Column()
    nombre: string
    @Column()
    ap1: string
    @Column()
    ap2: string


    //Relaciones N:N entre Profesor y Practica y 1:N con ExamenTeorico
    @OneToMany(() => Diseña, diseña => diseña.profesor)
    diseña: Diseña[];
    @OneToMany(() => Diseña, diseña => diseña.idProfesor)
    profesordiseñaexamenteorico: Diseña[];
}
