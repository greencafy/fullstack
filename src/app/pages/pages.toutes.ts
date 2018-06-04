import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const pagesRoutes: Routes = [
    {path: '', component: PagesComponent
    , children: [
    {path: 'dashbord', component: DashbordComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: '', redirectTo: '/dashbord', pathMatch: 'full'},

]
}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

