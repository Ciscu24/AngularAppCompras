import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  cargando:boolean = false;
  cargando2:boolean = false;

  constructor(private presupuestosService: PresupuestosService) {
    this.cargando = true;
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
      for (const id$ in presupuestos) {
        const p = presupuestos[id$];
        p.id$ = id$;
        this.presupuestos.push(presupuestos[id$]);
      }
      this.cargando = false;
    })
  }

  ngOnInit(): void {
  }

  eliminarPresupuesto(id$) {
    this.cargando2 = true;
    this.presupuestosService.delPresupuesto(id$)
      .subscribe(res => {
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos()
          .subscribe(presupuestos => {
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]);
            }
          })
          this.cargando2= false;
      });
  }

}
