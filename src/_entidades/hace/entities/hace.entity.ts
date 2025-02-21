import { Alumno } from "src/_entidades/alumno/entities/alumno.entity";
import { Examenteorico } from "src/_entidades/examenteorico/entities/examenteorico.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Hace {
    @PrimaryColumn()
    idAlumno: number
    @PrimaryColumn()
    idExamenTeorico: number
    @Column()
    nota: number

    @ManyToOne(() => Alumno, al => al.alumnohaceexamenteorico)
    @JoinColumn({ name: 'idAlumno' })
    al: Alumno;
    @ManyToOne(() => Examenteorico, et => et.alumnohaceexamenteorico)
    @JoinColumn({ name: 'idAlumno' })
    et: Examenteorico;
}
