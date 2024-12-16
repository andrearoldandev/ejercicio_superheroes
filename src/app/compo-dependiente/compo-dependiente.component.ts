import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-dependiente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo-dependiente.component.html',
  styleUrl: './compo-dependiente.component.css',
})
export class CompoDependienteComponent {
  /* FUNCIONES EN TS
    Bloque de código que realiza una acción o un grupo de acciones especificos.
    Ejemplo:
      - Muestre un mensaje
      - Sume dos números
      - Guarde o recoja datos desde el navegador

    SINTAXIS
      - La funcion en TS se declara con la palabra reservada "function"
      - En angular declararemos la funcion directamente con la siguiente sintaxis:

        nombreFuncion(argumentos) {
          bloque de codigo que se va a ejecutar cuando se llame a la funcion
        }

        - Los argumentos son valores que le paso a la función ene l momento en el que sea llamada

  */

  sumarNumeros(a: number, b: number) {
    console.log(a + b);
  }

  number1: number = 0;
  number2: number = 0;
  resultado: number = 0;

  multiplicar(number1: number, number2: number): number {
    return this.resultado = number1 * number2;
  }

  //Ejemplo edad progenitores
  edadPadre: number = 0;
  edadMadre: number = 0;
  resultadoEdad: number = 0;

  calcularEdadProgenitores(edadPadre: number, edadMadre: number): number{
    return this.resultadoEdad = edadPadre + edadMadre;
  }

  //Ejercicio 1
  numAmigos: number = 0;
  numCaramelos: number = 0;
  reparto: number = 0;

  repartoCaramelos(numAmigos: number, numCaramelos: number): number {
    return this.reparto = numCaramelos / numAmigos;
  }
}
