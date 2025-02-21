import { IsNotEmpty, IsString } from "class-validator"

export class CreateHaceDto {
    @IsNotEmpty()
    @IsString()
    idAlumno: number
    @IsNotEmpty()
    @IsString()
    idExamenTeorico: number
    @IsNotEmpty()
    @IsString()
    nota: number
}
