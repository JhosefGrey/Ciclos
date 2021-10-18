import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() { }

  //Solo se inicializa una vez cada vez que se  inicialice el componente
  ngOnInit() {
    console.log('Inicializando la carga del Onit del home');
  }

  //Disparado justo antes de que Angular destruya la vista
  ngOnDestroy(){
    console.log('Destruyendo el componente home');
  }

  //Antes de cargar la vista (empiece la animacion de cambio entre paginas)
  ionViewWillEnter(){
    console.log('ionViewWillEnter de home');
  }
//Despues de que se cargo la vista
  ionViewDidEnter(){
    console.log('ionViewDidEnter de home');

///Entre el will y did la diferencia que hay es el turno en la gerarquia de carga, primero va el onit luego el will y por ultimo el did

  }
//durante se este cargando la vista
  ionViewWillLeave(){
    console.log('ionViewWillLeave de home');
  }
//cuando se termino de cargar la vista
  ionViewDidLeave(){
    console.log('ionViewDidLeave de home');
  }

// diferencias entre el will y did es que que el will se dispara despues del onit pero antes que empice la transicion y el did justo despues
//de la transicion de la vista se completa y despues de didEnter.

//Orden gerarquia
//ngOnit se dispara una vez
//willLeave
//willEnter
//didEnter
//didLeave
//ultimo ondestroy
}
