import { Component } from '@angular/core';
import { BuyService } from '../service/buy.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-burguer',
  templateUrl: './burguer.component.html',
  styleUrls: ['./burguer.component.css']
})
export class BurguerComponent {

  product: any;
  userId: any = localStorage.getItem('userId');

  constructor(private buyService: BuyService,
    private matDialogRef: MatDialogRef<any>){

  }


  buyProduct(clientId: any, productId: any){
    this.buyService.buyProduct(clientId, productId).subscribe({
      next: (data) => {
        Swal.fire('Felicidades', 'producto comprado con exito')
        this.matDialogRef.close();
      },
      error: (err) => {
        Swal.fire('error en la compra', err.error)
      }
    })
  }

  close(){
    this.matDialogRef.close();
  }

}
