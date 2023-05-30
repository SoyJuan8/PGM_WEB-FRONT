import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BurguerService } from '../service/burguer.service';
import Swal from 'sweetalert2';
import { BuyService } from '../service/buy.service';
import { IdentityService } from 'src/app/security/service/identity.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  products: any[] = []
  ids: any[] = []
  userId: any = localStorage.getItem('userId');


  constructor(
    private burguerService: BurguerService,
    private buyService: BuyService,
    private identityService: IdentityService,
    private matDialogRef: MatDialogRef<any>
  ){   
  }

  ngOnInit(): void {
    this.findAllCar();
  }

  close(){
    this.matDialogRef.close();
  }

  buyCar(){
    this.buyService.buyProductCar(this.userId,this.ids).subscribe({
      next: (data) => {
        Swal.fire('Felicidades', 'productos comprados con exito')
        this.matDialogRef.close();
      },
      error: (err) => {
      }
    })
  }

  findAllCar(){
    this.burguerService.findAllCar().subscribe({
      next: (data) => {
        this.products.push(...data);
        const idProducts = this.products.map((product) => product.id)
        this.ids.push(...idProducts);
        console.log(this.ids);
      },
      error: (err) => {
      }
    })
  }

  deleteCar(id: any){
    this.burguerService.deleteCar(id).subscribe({
      next: (data) => {
        Swal.fire('Felicidades', 'producto eliminado con exito')
        location.reload();
      },
      error: (err) => {
      }

    })
  }

}
