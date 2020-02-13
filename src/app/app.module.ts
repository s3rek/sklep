import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Sanitizer } from '@angular/core';
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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';

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
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    //CustommaterialModule,
    MatBadgeModule,
  ],
  exports: [
    MatIconModule,
     MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'fb',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
    iconRegistry.addSvgIcon(
      'insta',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    iconRegistry.addSvgIcon(
      'linked',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
  }
}
