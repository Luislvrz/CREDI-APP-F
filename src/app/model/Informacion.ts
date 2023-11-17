import { Moneda } from "./Moneda";
export class Informacion {
  id: number=0;
  numeroAnios: number=0;
  porcentajeCuotaInicial: number=0;
  tipoTasaInteres: string="";
  plazoTasaInteres: string="";
  abreviaturaTasaInteres: string="";
  porcentajeTasaInteres: number=0;
  capitalizacion: string="";
  plazoDeGracia: string="";
  tiempoPlazoDeGracia: number=0;
  porcentajeSeguroDesgravamen: number=0;
  tiempoSeguroDesgravamen: string="";
  porcentajeSeguroVehicular: number=0;
  tiempoSeguroVehicular: string="";
  portes: number=0;
  costosRegistrales: number=0;
  costosNotariales: number=0;
  fechaInicio: string="";
  porcentajePrestamoFinanciar: number=0;
  montoPrestamoFinanciar: number=0;
  porcentajeCuotaFinal: number=0;
  montoCuotaFinal: number=0;
  frecuenciaPago: string="";
  cokAnual: number=0;

  monedas: Moneda[] = [];
}
