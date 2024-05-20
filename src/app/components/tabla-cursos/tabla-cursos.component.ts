import { Component, OnInit } from '@angular/core';
import { cursos } from './mock-cursos';
import { ICurso } from '../../models/i-curso';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {

  public cursos?: ICurso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
  
}
