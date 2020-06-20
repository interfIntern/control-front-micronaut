import { Aplicativo } from '../aplicativos/aplicativo';
import { Folio } from '../folios/folio';

export class Version {
    idVersion: number;
    version: string;
    descripcion: string;
    resumen: string;
    aplicativo: Aplicativo = new Aplicativo();
    folio: Folio = new Folio();
}