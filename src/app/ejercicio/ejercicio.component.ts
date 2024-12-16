import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent {
  atributoFuerza: string = "Nivel de Fuerza: "
  nombreHeroe: string = "Iron Man";
  lvlFuerza: number = 90;
  misiones: number = 2;
  nuevoNombre: string = "";
  mostrarInputNombre: boolean = false;
  mostrarForm: boolean = false;
  nuevaFuerza: number = 0;
  nuevasMisiones: number = 0;
  srcInicial: string = "assets/img/ironMan.webp";

  selectedHero: string = "Iron Man"
  

  tieneFuerza(): string{
    return this.lvlFuerza < 50 ? "red" : (this.lvlFuerza > 80 ? "green" : "white");
  }

  puedeMision(): boolean {
    return this.misiones  < 10 ;
  }

  aniadirMision(event: Event){
    this.misiones++;
    this.lvlFuerza += 10;
  }

  get disponible(): string {
    return this.misiones < 10 ? "Disponible" : "No disponible";
  }

  modificarNombre(): void{
    this.nombreHeroe = this.nuevoNombre || this.nombreHeroe;
    this.nuevoNombre = "";
    this.mostrarInputNombre = false;
  }

  mostrarInput(): void {
    this.mostrarInputNombre = !this.mostrarInputNombre;
  }

  crearSuper(): void{
    this.nombreHeroe = this.nuevoNombre || this.nombreHeroe;
    this.lvlFuerza = this.nuevaFuerza;
    this.misiones = this.nuevasMisiones;
    this.mostrarForm = false;
  }

  mostrarFormulario(): void{
    this.mostrarForm = !this.mostrarForm;
  }

  seleccionarSuperImg(): void {
    if (this.selectedHero === "Iron Man"){
      this.srcInicial = "assets/img/ironman.webp";
  }else if(this.selectedHero === "Spiderman"){
    this.srcInicial = "assets/img/spiderman.jpg";
  }else if(this.selectedHero === "Lobezno"){
    this.srcInicial = "assets/img/logan.webp";
  }else if(this.selectedHero === "Deadpool"){
    this.srcInicial = "assets/img/deadpool.jpg";
  }
}

}