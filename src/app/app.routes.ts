import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AnimationComponent } from './components/animation/animation.component';
import { BlankComponent } from './components/blank/blank.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ColorComponent } from './components/color/color.component';
import { ErrortextComponent } from './components/errortext/errortext.component';
import { OtherComponent } from './components/other/other.component';
import { TablesComponent } from './components/tables/tables.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'animation', component: AnimationComponent},
  { path: 'blank', component: BlankComponent},
  { path: 'border', component: BorderComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'charts', component: ChartsComponent},
  { path: 'color', component: ColorComponent},
  { path: 'errortext', component: ErrortextComponent},
  { path: 'other', component: OtherComponent},
  { path: 'tables', component: TablesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
