import { Informacion } from "./Informacion";
export class Moneda {
  id: number = 0;
  nombre: string = '';
  simbolo: string = '';
  abreviatura: string = '';
  informacions: Informacion[]=[];
}
