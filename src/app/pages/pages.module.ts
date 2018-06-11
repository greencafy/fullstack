import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.toutes';


@NgModule({
    declarations: [
    PagesComponent,
    DashbordComponent,
    ProgressComponent,
    Graficas1Component,

],
    exports: [
    PagesComponent,
    DashbordComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports: [
    SharedModule,
    PAGES_ROUTES
    ]
})
export class PagesModule {}
