import { NgModule } from "@angular/core";
import { SecurityComponent } from "./security.component";
import { SecurityRoutingModule } from "./security-routing.module";
import { AngularMaterialModule } from "src/shared/angular-material/angular-material.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SecurityComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        SecurityRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        CommonModule
    ]
  })
  export class SecurityModule { }