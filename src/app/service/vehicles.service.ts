import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private url = `${base_url}/vehicles`;
  constructor() { }
}
