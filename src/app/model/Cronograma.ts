import { Cuota } from './Cuota';
import { Customer } from './Customer';
import { Indicadores } from './Indicadores';
import { Informacion } from './Informacion';
import { Vehiculo } from './Vehiculo';
export class Cronograma {
  id: number = 0;
  cuotas: Cuota[] = [];
  customer: Customer = new Customer();
  informacion: Informacion = new Informacion();
  indicadores: Indicadores = new Indicadores();
  vehiculo: Vehiculo = new Vehiculo();
}
