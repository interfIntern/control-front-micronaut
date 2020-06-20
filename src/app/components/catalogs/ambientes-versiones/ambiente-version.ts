import { Ambiente } from '../ambientes/ambiente';
import { Version } from '../versiones/version';

export class AmbienteVersion {
    idAmbienteVersion: number;
    ambiente: Ambiente = new Ambiente();
    version: Version = new Version();
    desde: Date;
    hasta: Date;
}