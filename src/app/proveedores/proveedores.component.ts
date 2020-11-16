import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores:any = [];
  cargando:boolean = false;
  cargando2:boolean = false;

  constructor(private proveedoresService:ProveedoresService) { 
    this.cargando = true;
    this.proveedoresService.getProveedores().subscribe(proveedores => {
      for (const id$ in proveedores) {
        const p = proveedores[id$];
        p.id$ = id$;
        this.proveedores.push(proveedores[id$]);
      }
      this.cargando= false;
    })
  }

  ngOnInit(): void {}

  eliminarProveedor(id$) {
    this.cargando2 = true;
    this.proveedoresService.delProveedor(id$)
      .subscribe(res => {
        this.proveedores = [];
        this.proveedoresService.getProveedores()
          .subscribe(proveedores => {
            for (const id$ in proveedores) {
              const p = proveedores[id$];
              p.id$ = id$;
              this.proveedores.push(proveedores[id$]);
            }
          })
          this.cargando2 = false;
      });
  }

}
