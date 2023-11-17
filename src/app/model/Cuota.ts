import { Cronograma } from './Cronograma';

export class Cuota {
  id: number = 0;
  numeroDeCuota: number = 0;
  fechaDePago: string = '';
  saldoInicial: number = 0;
  amortizacion: number = 0;
  interes: number = 0;
  seguroDesgravamen: number = 0;
  seguroVehicular: number = 0;
  portes: number = 0;
  costosRegistrales: number = 0;
  costosNotariales: number = 0;
  cuota: number = 0;
  saldoFinal: number = 0;
  flujo: number = 0;

  cronograma: Cronograma = new Cronograma();
}
