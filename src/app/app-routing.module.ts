import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { from } from 'rxjs';

const routes: Routes= [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component:AboutusComponent},
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
 