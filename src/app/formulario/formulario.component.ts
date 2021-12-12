import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Output() sumarHijo = new EventEmitter<number>();
  operandoA!: number;
  operandoB!: number;

  constructor() {}

  sumar(): void {
    const suma = this.operandoA + this.operandoB;
    this.sumarHijo.emit(suma);
  }
}
