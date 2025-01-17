import { Aluno } from "./aluno";
import { Curso } from "./curso";

export interface CursoAluno {
    id: number;
    idCurso: number;
    idAluno: number;
    curso: Curso;
    aluno: Aluno;
    dataInicio: Date;
    dataFim: Date;
    progressoCurso: number;
}