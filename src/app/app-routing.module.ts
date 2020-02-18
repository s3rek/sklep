import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';
import {SetproductComponent} from './admin/setproduct/setproduct.component';
import {AdmintabComponent} from "./admin/admintab/admintab.component"
import {ProductComponent} from "./user/product/product.component"

const routes: Routes= [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'product', component:ProductComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'admin', component: AdmintabComponent},
  
  {path: '**', redirectTo: '/aboutus', pathMatch:'full'},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 