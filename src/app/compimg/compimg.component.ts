import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-compimg',
  templateUrl: './compimg.component.html',
  styleUrls: ['./compimg.component.scss']
})
export class CompimgComponent implements OnInit {
  private bandera: boolean;

  ngOnInit() {
    this.bandera = false;
  }

  mostrar() {
    this.bandera = !this.bandera;
  }
}
