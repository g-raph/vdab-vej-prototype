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
import { TestComponent } from './shell/test/test.component';
import { OpleidingSearchComponent } from './opleidingen/opleiding-search/opleiding-search.component';
import { OrienterenSearchComponent } from './orienteren/orienteren-search/orienteren-search.component';

export const routes: Routes = [
    {
        path:'', 
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ]
    },
    {
        path:'test', 
        children: [
            {
                path: '',
                component: TestComponent,
            },
        ]
    },
    {
        path:'jobs', 
        data: { breadcrumb: 'Jobs' },
        children: [
            {
                path: '',
                component: JobSearchComponent, 
                data: { breadcrumb: 'Alles over jobs'},                
            },
            {
                path:'vind-een-job', 
                data: { breadcrumb: 'Resultaten' },
                children: [
                    {
                        path: '',
                        component: JobListComponent,
                    },
                    {
                        path:':id', 
                        component: JobDetailComponent,
                        data: { breadcrumb: 'Job detail' },
                    },
                ]
            },
        ]
    },
    {
        path:'opleidingen', 
        data: { breadcrumb: 'Opleidingen' },
        children: [
            {
                path: '',
                component: OpleidingSearchComponent, 
                data: { breadcrumb: 'Alles over opleidingen'},                
            },
            {
                path:'vind-een-opleiding', 
                data: { breadcrumb: 'Resultaten' },
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
        ]
    },
    {
        path:'orienteren', 
        data: { breadcrumb: 'Oriënteren' },
        children: [
            {
                path: '',
                component: OrienterenSearchComponent, 
                data: { breadcrumb: 'Alles over oriënteren'},                
            }
        ]
    },
    {path:'login', component: LoginComponent, data: { breadcrumb: 'Login'} },
    {path:'favorites', component: FavoritesComponent, data: { breadcrumb: 'Bewaarde vacatures'} },
    {path:'studieboom', component: StudieboomComponent, data: { breadcrumb: 'Studieboom'} },
    {path:'**', redirectTo:'vind-een-job'},
];
