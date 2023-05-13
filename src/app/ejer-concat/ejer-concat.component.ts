import { Component } from '@angular/core';
import { concat, finalize, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-ejer-concat',
  templateUrl: './ejer-concat.component.html',
  styleUrls: ['./ejer-concat.component.css']
})
export class EjerConcatComponent {
  claseActual='text-primary';
  valor:string='';
  meses=['enero', 'febrero', 'marzo','abril', 'mayo','junio','julio','agosto',
          'septiembre','octubre','noviembre','diciembre'];
  dias=['lunes', 'martes', 'miercoles','jueves','viernes','sabado'];

  nums$ = interval(500).pipe( 
                   map(n => n + 1), 
                   take(20),
                   finalize(() => this.claseActual = 'text-danger')
                   );

  meses$ = interval(1000).pipe( 
                    map(n => this.meses[n]),
                    take(this.meses.length),
                    finalize(() => this.claseActual = 'text-success')
                    )

  dias$ = interval(2000).pipe(
                      map( n => this.dias[n]),
                      take(this.dias.length)
                  )
  numsMesesDias$ = concat(this.nums$, this.meses$, this.dias$);

  iniciarConcatenacion(){
    this.numsMesesDias$.subscribe(val => this.valor = "" + val);
  }
}
