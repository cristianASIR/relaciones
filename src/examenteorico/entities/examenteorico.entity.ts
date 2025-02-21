import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenTeorico {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    titulo: string
    @Column()
    num_preguntas: number
    @Column()
    fecha: Date
    
    //Cada alumno puede tener una o varios examenes
    @ManyToOne(() => Alumno, (alumno) => alumno.examenTeorico)
        alumno: Alumno;

    @OneToOne(() => Profesor, (profesor) => profesor.examenTeorico)
    //@JoinColumn()
    profesor: Profesor;
}