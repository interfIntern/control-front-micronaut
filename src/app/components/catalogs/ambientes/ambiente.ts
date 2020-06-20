import { Server } from '../servers/server';
import { Aplicativo } from '../aplicativos/aplicativo';

export class Ambiente {
    idAmbiente: number;
    server: Server = new Server();
    aplicativo: Aplicativo = new Aplicativo();
    usuario: string;
    pass: string;
    ruta: string;
    puerto: number;

}