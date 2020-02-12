import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
//import { CustommaterialModule } from './custommaterial.module';
import { MatCardModule} from '@angular/material/card';
import {SettingsComponent} from './settings/settings.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    //CustommaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
