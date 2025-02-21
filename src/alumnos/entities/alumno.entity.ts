import { ExamenTeorico } from "src/examenteorico/entities/examenteorico.entity";
import { Practica } from "src/practica/entities/practica.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    //Cada alumno puede tener muchas prácticas
    @ManyToOne(() => Practica, (practica) => practica.alumnos)
    practica: Practica;

    //Un alumno hace varios examenes
    @OneToMany(() => ExamenTeorico, (examenTeorico) => examenTeorico.alumno)
    examenTeorico: ExamenTeorico[];
}
