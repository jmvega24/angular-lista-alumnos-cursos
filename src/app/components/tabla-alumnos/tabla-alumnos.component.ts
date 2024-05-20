import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock-alumnos';
import { IAlumno } from '../../models/i-alumno';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})

export class TablaAlumnosComponent implements OnInit {

  public alumnos?: IAlumno[];

  ngOnInit(): void {
    this.alumnos = alumnos;
  }



}
