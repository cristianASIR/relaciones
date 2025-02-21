import { Diseña } from "src/_entidades/diseña/entities/diseña.entity";
import { Hace } from "src/_entidades/hace/entities/hace.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Examenteorico {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    titulo: string
    @Column()
    num_preguntas: number
    @Column()
    fecha: Date

    //Relacion N:N entre examenteorico y alumno y 1:N con profesor
    @OneToMany(() => Hace, ha => ha.idExamenTeorico)
    alumnohaceexamenteorico: Hace[];
    @ManyToOne(() => Diseña, diseña => diseña.profesordiseñaexamenteorico)
    diseña: Diseña[];

    //ChatGPT
    // @ManyToOne(() => Profesor, (profesor) => profesor.examenesTeorico)
    // profesor: Profesor;

    // @OneToMany(() => AlumnoHaceExamenTeorico, (hace) => hace.examenTeorico)
    // hace: AlumnoHaceExamenTeorico[];
}
