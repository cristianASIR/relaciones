import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiseñaDto {
    @IsNotEmpty()
    @IsString()
    idPractica: number
    @IsNotEmpty()
    @IsString()
    idProfesor: number
    @IsNotEmpty()
    @IsString()
    fecha: Date
}
