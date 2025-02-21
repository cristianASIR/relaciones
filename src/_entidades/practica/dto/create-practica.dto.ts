import { IsNotEmpty, IsString } from "class-validator"

export class CreatePracticaDto {
    @IsNotEmpty()
    @IsString()
    id: number
    @IsNotEmpty()
    @IsString()
    titulo: string
    @IsNotEmpty()
    @IsString()
    dificultad: string
}
