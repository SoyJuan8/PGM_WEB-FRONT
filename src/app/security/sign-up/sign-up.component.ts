import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IdentityService } from '../service/identity.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: UntypedFormGroup;
  submmiting = false

  constructor(
    private router: Router,
    private identityService: IdentityService,
  ) {
  }


  ngOnInit(): void {
    this.signUpForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      passwordConfirm: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      phone: new UntypedFormControl('', Validators.required),
      document: new UntypedFormControl('', Validators.required),
      address: new UntypedFormControl('', Validators.required),
    });
  }

  signUp(): void {
    this.identityService.signUp(this.signUpForm.value).subscribe({
      next: (data) => {
        Swal.fire('Felicidades', 'usuario creado con exito')
        this.router.navigate(['security/sign-in']);
      },
      error: (err) => {
        Swal.fire('!Oops!', err.error.message, 'error');
        this.submmiting = false;
      },
      complete: () => {
        this.submmiting = false;
      },
    });
  
}

}
