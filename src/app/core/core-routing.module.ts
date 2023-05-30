import { RouterModule, Routes } from "@angular/router";
import { CoreComponent } from "./core.component";
import { BurguerComponent } from "./burguer/burguer.component";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
      path: '',
      component: CoreComponent,
      children:[
        {
          path: 'burguer',
          component: BurguerComponent,
        },
        {
          path: 'profile',
          component: ProfileComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }