import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { AdministrationComponent } from './administration/administration.component';
import { DemoWithtoutTemplateComponent } from './demo-withtout-template/demo-withtout-template.component';
import { FeatureComponent } from './feature/feature.component';
import { DemoWithoutTestComponent } from './demo-without-test/demo-without-test.component';
import { Directive1Directive } from './feature/directive/directive1.directive';
import { Pipe1Pipe } from './feature/pipes/pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    AdministrationComponent,
    DemoWithtoutTemplateComponent,
    FeatureComponent,
    DemoWithoutTestComponent,
    Directive1Directive,
    Pipe1Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
