import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  // Contiene el resultado obtenido del hijo
  sumaPadre!: number;

  sumarPadre(suma: number) {
    this.sumaPadre = suma;
  }
}
