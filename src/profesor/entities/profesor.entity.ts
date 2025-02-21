import { ExamenTeorico } from "src/examenteorico/entities/examenteorico.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //Un profesor puede diseñar varios examenteorico
    @OneToMany(() => ExamenTeorico, (examenTeorico) => examenTeorico.profesor)
    examenesTeorico: ExamenTeorico[];

    //Un examenteorico es diseñado por 1 solo profesor
    @OneToOne(() => ExamenTeorico, (examenTeorico) => examenTeorico.profesor)
    @JoinColumn() // Esto es importante para la relación 1:1
    examenTeorico: ExamenTeorico;
}
