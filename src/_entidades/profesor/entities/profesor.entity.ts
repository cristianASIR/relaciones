import { Diseña } from "src/_entidades/diseña/entities/diseña.entity";
import { Examenteorico } from "src/_entidades/examenteorico/entities/examenteorico.entity";
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
    diseños: Diseña[];
    @OneToMany(() => Examenteorico, et => et.pro)
    ets: Examenteorico[];
}
