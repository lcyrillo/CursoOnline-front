import { Curso } from "./curso";
import { CursoAluno } from "./cursoAluno";
import { Usuario } from "./usuario";

export interface Aluno extends Usuario {
    idUsuario: number;
    ra: number;
    cursos: Curso[];
    cursoAluno: CursoAluno[];
}