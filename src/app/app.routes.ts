import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './jobs/job-search/job-search.component';
import { LoginComponent } from './auth/login/login.component';
import { FavoritesComponent } from './jobs/favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { StudieboomComponent } from './studieboom/studieboom.component';
import { OpleidingListComponent } from './opleidingen/opleiding-list/opleiding-list.component';
import { OpleidingDetailComponent } from './opleidingen/opleiding-detail/opleiding-detail.component';

export const routes: Routes = [
    {
        path:'vind-een-job', 
        data: { breadcrumb: 'Jobs' },
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
                        data: { breadcrumb: 'Vacaturedetail' },
                    },
                ]
            },
        ]
    },
    {
        path:'vind-een-opleiding', 
        data: { breadcrumb: 'Opleidingen' },
        children: [
            {
                path: '',
                component: OpleidingListComponent,
            },
            {
                path:':id', 
                component: OpleidingDetailComponent,
                data: { breadcrumb: 'Opleiding detail' },
            },
        ]
    },
    {path:'login', component: LoginComponent, data: { breadcrumb: 'Login'} },
    {path:'favorites', component: FavoritesComponent, data: { breadcrumb: 'Bewaarde vacatures'} },
    {path:'studieboom', component: StudieboomComponent, data: { breadcrumb: 'Studieboom'} },
    {path:'**', redirectTo:'vind-een-job'},
];
