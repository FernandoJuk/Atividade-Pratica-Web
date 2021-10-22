import { Component } from '@angular/core';
import { Estudante } from './arquivo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//                       ALIMENTANDO AS INFORMAÇÕES  DOS OBJETOS
export class AppComponent {
  fernando = new Estudante("FERNANDO", 3679815, "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS", "08/08/1984");
  susan= new Estudante("SUSAN", 3545101, "GESTÃO COMERCIAL", "25/041983");
  agatha= new Estudante("AGATHA", 2579546, "ADMINISTRAÇÃO", "12/02/2000");
  nycolas= new Estudante("NYCOLAS", 1985101, "DIREITO", "02/08/1980");
  crhistopher= new Estudante("CRHISTOPHER", 1622548, "REDES DE COMPUTADORES", "09/04/1998");

  //                           ATIBUINDO OS CINCO OBJTOS A LISTA estudantes
  estudantes: Estudante[] = [this.fernando, this.susan, this.agatha, this.nycolas, this.crhistopher];
}
