import { Component, OnInit } from '@angular/core'; 
import {FormsModule} from '@angular/forms'; 
import {BrowserModule}from '@angular/platform-browser';
 @Component({ 
     selector: 'app-registro',  
      templateUrl: './registro.component.html', 
        styleUrls: ['./registro.component.css'] }) 
        export class RegistroComponent implements OnInit { 
          registro=[];
           cliente:any; 
           visita:number;
           nombre:string;
            dui:string; 
            cod:string;
            precio:number 
            descripcion:string;
            descuento:number;
            contador:number; 
            constructor() { }  
  ngOnInit() {    
   this.nombre='';
     this.dui='';
     this.cod='';
     this.precio=0;   
       this.contador=0; 
        }  
  ingresar(){ 
    if(this.visita>0 && this.visita<2){
      switch(this.cod){

        case 'pan':  
        this.precio=1.00;
        this.descripcion='Pan integral 850g';
         break;
          case 'leche':  
        this.precio=2.50;
        this.descripcion='Leche Australia para niños';
          break;
          case "queso":  
        this.precio=1.75;
        this.descripcion='Queso cotage marca San Julian';
break;
          case "huevos":  
        this.precio=3.50;
        this.descripcion='Huevos marca el granjero tamaño jumbo';
          break;

          case "frijoles":  
        this.precio=1.25;
        this.descripcion='Frijoles rojos San Lorenzo';
        break;
        default:
          this.precio=0;
          this.descripcion='no hay producto ingresado';
          
} 

}  if(this.visita>=2 && this.visita<=4){
  switch(this.cod){

    case 'pan': 
    this.descuento=1*(5/100); 
    this.precio=1.00 - this.descuento;
    this.descripcion='Pan integral 850g';
     break;
      case 'leche': 
      this.descuento=2.50*(5/100); 
    this.precio=2.50 - this.descuento; 
    this.descripcion='Leche Australia para niños';
      break;
      case "queso":  
      this.descuento=1.75*(5/100); 
    this.precio=1.75 - this.descuento;
    this.descripcion='Queso cotage marca San Julian';
break;
      case "huevos":  
      this.descuento=3.50*(5/100); 
    this.precio=3.50 - this.descuento;
    this.descripcion='Huevos marca el granjero tamaño jumbo';
      break;

      case "frijoles":  
      this.descuento=1.25*(5/100); 
    this.precio=1.25 - this.descuento;
    this.descripcion='Frijoles rojos San Lorenzo';
    break;
    default:
      this.precio=0;
      this.descripcion='no hay producto ingresado';
      
} 
}
if(this.visita>4){
  switch(this.cod){

    case 'pan': 
    this.descuento=1*(10/100); 
    this.precio=1.00 - this.descuento;
    this.descripcion='Pan integral 850g';
     break;
      case 'leche': 
      this.descuento=2.50*(10/100); 
    this.precio=2.50 - this.descuento; 
    this.descripcion='Leche Australia para niños';
      break;
      case "queso":  
      this.descuento=1.75*(10/100); 
    this.precio=1.75 - this.descuento;
    this.descripcion='Queso cotage marca San Julian';
break;
      case "huevos":  
      this.descuento=3.50*(10/100); 
    this.precio=3.50 - this.descuento;
    this.descripcion='Huevos marca el granjero tamaño jumbo';
      break;

      case "frijoles":  
      this.descuento=1.25*(10/100); 
    this.precio=1.25 - this.descuento;
    this.descripcion='Frijoles rojos San Lorenzo';
    break;
    default:
      this.precio=0;
      this.descripcion='no hay producto ingresado';
      
} 
}  

this.cliente={"visita":this.visita,"nombre":this.nombre,"dui":this.dui,"cod":this.cod,"descripcion":this.descripcion,"precio":this.precio.toFixed(2)};       
this.registro.push(this.cliente);        
           this.contador++;  
            }  }

            `optionValue`;

