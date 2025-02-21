import { Column, Entity, PrimaryColumn } from "typeorm";

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

    
}
