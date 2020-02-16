import { NgModule } from '@angular/core';
import { HeaderComponent} from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';
import {SetproductComponent} from './admin/setproduct/setproduct.component';

const routes: Routes= [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'setproduct', component: SetproductComponent},
  
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
 