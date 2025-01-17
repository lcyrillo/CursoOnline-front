import { Usuario } from "./usuario";

export interface TipoUsuario {
    id: number;
    descricao: string;
    usuarios: Usuario[];
}