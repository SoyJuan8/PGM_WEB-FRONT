import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { BurguerComponent } from "./burguer/burguer.component";
import { AngularMaterialModule } from "src/shared/angular-material/angular-material.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { CarComponent } from './car/car.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
      BurguerComponent,
      CoreComponent,
      CarComponent,
      ProfileComponent
    ],
    imports: [
      CommonModule,
      CoreRoutingModule,
      AngularMaterialModule,
      ReactiveFormsModule
    ]
  })
  export class CoreModule { }