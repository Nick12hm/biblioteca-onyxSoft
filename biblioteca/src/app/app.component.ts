import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliotecaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca';
}
