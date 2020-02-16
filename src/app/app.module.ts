import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Sanitizer } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SettingsComponent} from './settings/settings.component';
import {DomSanitizer} from '@angular/platform-browser';
//import { CustommaterialModule } from './custommaterial.module';
import {SetproductComponent} from './admin/setproduct/setproduct.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconRegistry} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    SetproductComponent,
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
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    
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
