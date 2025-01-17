import { Curso } from "./curso";
import { Usuario } from "./usuario";

export interface Professor extends Usuario {
    idUsuario: number;
    cursos: Curso[];
}