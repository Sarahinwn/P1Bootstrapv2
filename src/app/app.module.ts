import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationComponent } from './components/animation/animation.component';
import { BlankComponent } from './components/blank/blank.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ColorComponent } from './components/color/color.component';
import { ErrortextComponent } from './components/errortext/errortext.component';
import { HomeComponent } from './components/home/home.component';
import { TablesComponent } from './components/tables/tables.component';
import { OtherComponent } from './components/other/other.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    BlankComponent,
    BorderComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    ColorComponent,
    ErrortextComponent,
    HomeComponent,
    TablesComponent,
    OtherComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
