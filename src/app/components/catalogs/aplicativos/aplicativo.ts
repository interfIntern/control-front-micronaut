import { Suite } from '../suites/suite';

export class Aplicativo {
    idAplicativo: number;
    nombre: string;
    descripcion: string;
    resumen: string;
    suite: Suite = new Suite();
  }