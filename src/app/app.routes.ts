import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './jobs/job-search/job-search.component';
import { LoginComponent } from './auth/login/login.component';
import { FavoritesComponent } from './jobs/favorites/favorites.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'vind-een-job', 
        data: { breadcrumb: 'Vind een job' },
        children: [
            {
                path: '',
                component: JobSearchComponent,
            },
            {
                path:'zoekresultaten', 
                data: { breadcrumb: 'Zoekresultaten' },
                children: [
                    {
                        path: '',
                        component: JobListComponent,
                    },
                    {
                        path:':id', 
                        component: JobDetailComponent,
                        data: { breadcrumb: 'Detail' },
                    },
                ]
            },
        ]
    },
    {path:'login', component: LoginComponent, data: { breadcrumb: 'Login'} },
    {path:'favorites', component: FavoritesComponent, data: { breadcrumb: 'Bewaarde vacatures'} },
    {path:'**', redirectTo:'vind-een-job'},
];
