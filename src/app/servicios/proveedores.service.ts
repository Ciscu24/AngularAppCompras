import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProveedoresService {
  /*proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ]
  getProveedores() {
    return this.proveedores;
  }*/

  provURL = 'https://comprasapp-dad76.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-dad76.firebaseio.com/proveedores';
  constructor(private http: HttpClient) { }

  postProveedor(proveedor: any) {
    const newprov = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.provURL, newprov, { headers }).pipe(map(res => {
      console.log(res);
      return res;
    }))
  }

  getProveedores() {
    return this.http.get(this.provURL)
      .pipe(map(res => res));
  }

  getProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(map(res => res));
  }
  
  putProveedor(proveedor: any, id$: string) {
    const newpro = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.proURL}/${id$}.json`;
    return this.http.put(url, newpro, { headers })
      .pipe(map(res => {
        console.log(res);
        return res;
      }))
  }

  delProveedor ( id$: string ) {
    const url = `${ this.proURL }/${ id$ }.json`;
    return this.http.delete( url )
    .pipe(map( res => res));
  }
}
