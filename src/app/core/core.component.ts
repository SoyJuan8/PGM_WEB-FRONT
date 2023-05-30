import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { BurguerService } from './service/burguer.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { BurguerComponent } from './burguer/burguer.component';
import { CarComponent } from './car/car.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  hamburguesas: any[] = [];
  otros: any[] = [];
  hotDogs: any[] = [];
  sesionIniciada: boolean = false;

  constructor(
    private burguerService: BurguerService,
    private matDialog: MatDialog,
  ) {
    // Verificar si existe el access_token en el localStorage
    const access_token = localStorage.getItem('access_token');
    this.sesionIniciada = !!access_token; // Si existe access_token, sesionIniciada es true
  }

  ngOnInit(): void {
    this.findAllByBurguer();
    this.findAllHotDogs();
    this.findAllOtros();
  }

  // Método para iniciar o cerrar la sesión
  cambiarEstadoSesion() {
    if (this.sesionIniciada) {
      // Cerrar sesión
      localStorage.removeItem('access_token');
      Swal.fire('Sesión cerrada', 'La sesión se ha cerrado con éxito');
    } else {
      // Iniciar sesión
      localStorage.setItem('access_token', 'valor_del_access_token');
    }

    this.sesionIniciada = !this.sesionIniciada;
  }

  findAllByBurguer(){
    const category = "HAMBURGUESA"
    this.burguerService.findAllByProduct(category).subscribe({
      next: (data) => {
        this.hamburguesas.push(...data)
        console.log(data)
      }
    })
  }

  findAllHotDogs(){
    const category = "PERRO CALIENTE";
    this.burguerService.findAllByProduct(category).subscribe({
      next: (data) => {
        this.hotDogs.push(...data);
        console.log(data)
      }
    })
  }

  findAllOtros(){
    const category = "OTROS";
    this.burguerService.findAllByProduct(category).subscribe({
      next: (data) => {
        this.otros.push(...data);
        console.log(data)
      },
      error: (err) => {

      }
    })
  }

  updateCar(id: number){
    this.burguerService.updateCar(id).subscribe({
      next: (data) => {
        Swal.fire('felicidades', 'producto agregado con exito')
      }

    })
  }


  buyProduct(product: any){
    const modalRef = this.matDialog.open(BurguerComponent
      );
    modalRef.componentInstance.product = product;
  }

  profile(){
    const modalRef = this.matDialog.open(ProfileComponent)
  }


  openCar(){
    const modalRef = this.matDialog.open(CarComponent, {
      width: '800px',
      maxWidth: '800px'
    }
      )
  }
  

}
