import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-theory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-theory.component.html',
  styleUrl: './event-theory.component.css',
})
export class EventTheoryComponent {
  /* EVENT BINDING

  Nos permite escuchar los eventos que ocurren en el navegador (template), y ejecutar una acción en respuesta.

  SINTAXIS

  HTML --
    (nombreEvento)="metodoAEjecutar()"
  TS --
    creamos el método que es llamado desde el HTML

  metodoAEjecutar(){
    bloque de código que ejecuta el método
  }

  */

  saludar(): void {
    alert('¡Hola!');
  }

  mensaje: string = 'Hola';

  cambiarMensaje() {
    this.mensaje = 'El mensaje ha cambiado';
  }

  clicks: number = 0;

  incrementarClick() {
    this.clicks++;
  }

  /* EVENTOS EN TS

    - EVENTOS DE RATÓN

      - (click): Cuando haces click en un elemento.
      - (dblclick): Cuando haces doble click en un elemento.
      - (mousedown): Cuando haces click en un elemento y mantienes el botón pulsado.
      - (mouseup): Cuando haces click en un elemento y sueltas el botón.
      - (mouseleave): Cuando el mouse sale de un elemento.
      - (mouseenter): Cuando el mouse entra en un elemento.

    - EVENTOS DE TECLADO

      - (keydown): Cuando el usuario pulsa una tecla.
      - (keyup): Cuando el usuario suelta una tecla.
      - (keypress): Cuando el usuario mantiene presionada una tecla(deprecated en algunos navegadores).

    - EVENTOS DE FORMULARIOS

      - (input): Cuando el valor de un campo cambia.
      - (change): Cuando el valor de un campo cambia y el foco se pierde (pasamos al siguiente campo).
      - (submit): Cuando se envia un formulario.

    - EVENTOS ENFOQUE

      - (focus): Cuando un elemento recibe el foco.
      - (blur): Cuando un elemento pierde el foco.

    - EVENTOS DE VENTANA

      - (scroll): Cuando el usuario hace scroll en una página.
      - (resize): Cuando cambia el tamaño de la ventana de nuestro navegador.
  */

  /* OBJECT EVENT
    - El objeto event de TS contiene información específica del evento que ha ocurrido en el template.

    - Propiedades más comunes:
      · Event:
        - type: tipo de evento
        - target: El elemento que ha disparado el evento.
        - timeStamp: Cuándo ha ocurrido el evento (milisegundos desde que la página se ha cargado hasta que se ha disparado el evento).

      ·MouseEvent:
        - clientX y clientY: Coordenadas del ratón en el momento en el que se ha disparado el evento.
        - button: Qué botón del mouse se h presionado para disparar el evento (izquierdo = 0, centro = 1(ruedecita) , derecho = 2).

      ·KeyboardEvent:
        - key: Tecla que se ha presionado para disparar el evento.
        - code: El código físico de la tecla presionada para disparar el evento.
        - ctrlKey, shiftKey, altKey: Si se presionan las teclas Ctrl, Shift o Alt conjuntamente con otra tecla para modificarla al disparar el evento. (e, €).
  */

  trackingEvent(event: MouseEvent): void {
    console.log(event);
  }

  //Evento de formulario input con tracking de object event
  inputValue: string = '';

  mostrarInfoInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;

    //Mostramos por consola el tipo de evento que se esta usando
    console.log("Tipo de evento que se ha disparado: ", event.type);
  }

//Mostrar las coordenadas del ratón
  mouseX: number = 0;
  mouseY: number = 0;

  onMouseClick(event: MouseEvent): void{
    //clientX y clientY registran las coordenadas del evento
    this.mouseX = event.clientX;
    this.mouseY =event.clientY;
  }

  //Text area con (input)
  texto: string = "";

    actualizarTexto(event: Event): void {
      //Convertir el event.target (Con esta propiedad recogemos toda la info del elemento HTML que ha generado el evento) a un textarea para poder acceder a todas las propiedades del textarea.
      const textarea = event.target as HTMLTextAreaElement;
      this.texto = textarea.value;
    }

  //Select
  seleccion: string = "";

    actualizarSelect(event: Event): void {
      const select = event.target as HTMLSelectElement;
      this.seleccion = select.value;
    }

  //Imagenes
    srcImg: string="";
    altImageClicked: string = "";

    trackearImg(event: Event): void{
      const img = event.target as HTMLImageElement;
      this.srcImg = img.src;
      this.altImageClicked = img.alt;
    }

  //Contenido de un div
    contenidoDiv: string = "";
    contenidoP: string = "";

    obtenerTextoDiv(event: Event): void {
      const div = event.target as HTMLDivElement;
      this.contenidoDiv = div.innerHTML;
    }

    obtenerTextoP(event: Event): void {
      const p = event.target as HTMLParagraphElement;
      this.contenidoP = p.innerHTML;
    }


  //EJERCICIOS

  //EJERCICIO 1
   mascota: string = "";

    mascotaSelect(event: Event): void {
      const selectMascota = event.target as HTMLSelectElement;
      this.mascota = selectMascota.value;
    }

  //EJERCICO 2
    /*Muestra las imágenes de 4 películas en tu HTML. Debajo de las películas debes mostrar los siguientes datos que cambiarán dinámicamente dependiento de en qué película haga click el usuario: Podéis añadir la información en el atributo alt(título y el año), title(Categoría):
    1. Título 
    2. Año de la película
    3. Categoría
    4. SRC*/

    srcPeli: string = "";
    altPeli: string = "";
    titlePeli: string = "";

    infoPelis(event: Event): void {
      const peli = event.target as HTMLImageElement;
      this.srcPeli = peli.src;
      this.altPeli = peli.alt;
      this.titlePeli = peli.title;
    }

  //EJERCICIO 3
    /*
    Crea una lista ordenada/desordenada en HTML y pide al usuario que haga click en el elemento de la lista que quiera mostrar.
    Muestra el contenido del elemento de la lista clickado en un párrafo a continuación de la lista. 
    
    */

    contenidoLi: string = "";

    ingrediente(event: Event): void {
      const li = event.target as HTMLLIElement;
      this.contenidoLi = li.innerHTML;
    }

}
