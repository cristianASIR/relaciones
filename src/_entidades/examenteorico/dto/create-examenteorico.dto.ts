import { IsNotEmpty, IsString } from "class-validator";

export class CreateExamenteoricoDto {
    @IsNotEmpty()
    @IsString()
    titulo: string
    @IsNotEmpty()
    @IsString()
    num_preguntas: number
    @IsNotEmpty()
    @IsString()
    fecha: Date
}
