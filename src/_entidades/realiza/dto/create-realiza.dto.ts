import { IsNotEmpty, IsString } from "class-validator"

export class CreateRealizaDto {
    @IsNotEmpty()
    @IsString()
    idPractica: number
    @IsNotEmpty()
    @IsString()
    idAlumno: number
    @IsNotEmpty()
    @IsString()
    fecha: Date
    @IsNotEmpty()
    @IsString()
    nota: number
}
