import { TipoUsuario } from "./tipoUsuario";

export interface Usuario {
    id: number;
    email?: string;
    senhaHash?: Base64URLString;
    senhaSalt?: Base64URLString;
    cpf?: string;
    idTipoUsuario: number;
    senhaProvisoria: string;
    tipoUsuario?: TipoUsuario;
}