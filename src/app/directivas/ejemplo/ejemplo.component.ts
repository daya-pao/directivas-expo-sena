import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent {

  texto2:String = "texto2 hola desde el padre"

  nombre = 'animales'
  changemodule(evento:any){
    this.nombre = evento.target.value;
  }

  cajalist = signal([
    {id:1 ,  raza : "perro" , name:'firulais'},
    {id:2 ,  raza : "perro" , name:'tomas'},
    {id:2 ,  raza : "perro" , name:'pinki'},
  ])  
  cajaflor = signal([
    {id:1 ,  name : "margarita"},
    {id:2 ,  name : "rosas" }
  ])  

  title: String = "hola que tal"
  color: string = 'verde';
}
