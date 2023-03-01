import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit{
  url = 'http://127.0.0.1:8000/api/formulario';

  constructor(){}

  titulo= 'Formulario skytel';

  /*persona={
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  }*/

 

  ngOnInit(): void {
    
  }

}
