import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoDependienteComponent } from './compo-dependiente/compo-dependiente.component';
import { FormsModule } from '@angular/forms';
import { EventTheoryComponent } from "./event-theory/event-theory.component";
import { EjercicioComponent } from './ejercicio/ejercicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoDependienteComponent, FormsModule, EventTheoryComponent, EjercicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventBinding';
}
