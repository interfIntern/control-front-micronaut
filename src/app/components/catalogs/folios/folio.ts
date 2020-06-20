import { Aplicativo } from '../aplicativos/aplicativo';
import { Lider } from '../lideres/lider';

export class Folio {
    idFolio: number;
    folioCq: string;
    descripcion: string;
    resumen: string;
    aplicativo: Aplicativo = new Aplicativo();
    lider: Lider = new Lider();
  
  }