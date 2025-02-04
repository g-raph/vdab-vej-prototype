import { Routes } from '@angular/router';
import { JobListComponent } from './domains/jobs/job-list/job-list.component';
import { JobDetailComponent } from './domains/jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './domains/jobs/job-search/job-search.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { FavoritesComponent } from './domains/jobs/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { StudieboomComponent } from './pages/studieboom/studieboom.component';
import { TestComponent } from './shell/test/test.component';
import { OpleidingSearchComponent } from './domains/opleidingen/opleiding-search/opleiding-search.component';
import { OpleidingListComponent } from './domains/opleidingen/opleiding-list/opleiding-list.component';
import { OpleidingDetailComponent } from './domains/opleidingen/opleiding-detail/opleiding-detail.component';
import { OrienterenSearchComponent } from './domains/orienteren/orienteren-search/orienteren-search.component';
import { ContentpageComponent } from './pages/contentpage/contentpage.component';

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
                data: { breadcrumb: 'Jobs'},                
            },
            {
                path:'vind-een-job', 
                data: { breadcrumb: 'Vind een job' },
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
                data: { breadcrumb: 'Opleidingen'},                
            },
            {
                path:'vind-een-opleiding', 
                data: { breadcrumb: 'Vind een opleiding' },
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
    {path:'favorites', component: FavoritesComponent, data: { breadcrumb: 'Bewaarde vacatures / opleidingen'} },
    {path:'studieboom', component: StudieboomComponent, data: { breadcrumb: 'Studieboom'} },
    {path:'content', component: ContentpageComponent, data: { breadcrumb: 'Content pagina'} },
    {path:'**', redirectTo:'vind-een-job'},
];
