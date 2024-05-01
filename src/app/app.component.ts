import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hola mundo Angular desde componente!';

  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres', 'Manuel'];
  //users: string[] = [];

  //Visible
  visible: boolean = false;

  //Metodo
  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Hemos hecho clic en setVisible');
  }
}
