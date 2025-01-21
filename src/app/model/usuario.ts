import { TipoUsuario } from "./tipoUsuario";

export interface Usuario {
    id: number;
    email?: string;
    senhaHash?: BigInt64Array;
    senhaSalt?: BigInt64Array;
    cpf?: string;
    idTipoUsuario: number;
    senhaProvisoria: string;
    tipoUsuario?: TipoUsuario;
}