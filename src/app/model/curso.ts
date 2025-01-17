import { Aluno } from "./aluno";
import { CursoAluno } from "./cursoAluno";
import { Professor } from "./professor";

export interface Curso {
    id: number;
    nome?: string;
    sobre?: string;
    cargaHoraria: number;
    publicoAlvo: number;
    valor: number;
    professor: Professor;
    idProfessor: number;
    aprovado: boolean;
    alunos: Aluno[];
    cursoAlunos: CursoAluno[];
}