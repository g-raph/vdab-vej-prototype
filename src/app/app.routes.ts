import { Routes } from '@angular/router';
import { JobListComponent } from './domains/jobs/job-list/job-list.component';
import { JobDetailComponent } from './domains/jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './domains/jobs/job-search/job-search.component';
import { FavoritesComponent } from './domains/jobs/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { StudieboomComponent } from './pages/studieboom/studieboom.component';
import { TestComponent } from './shell/test/test.component';
import { OpleidingSearchComponent } from './domains/opleidingen/opleiding-search/opleiding-search.component';
import { OpleidingListComponent } from './domains/opleidingen/opleiding-list/opleiding-list.component';
import { OpleidingDetailComponent } from './domains/opleidingen/opleiding-detail/opleiding-detail.component';
import { OrienterenSearchComponent } from './domains/orienteren/orienteren-search/orienteren-search.component';
import { ContentpageComponent } from './pages/contentpage/contentpage.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { MapComponent } from './components/map/map.component';
import { MapglComponent } from './components/mapgl/mapgl.component';
import { TabbarAnimationComponent } from './components/tabbar-animation/tabbar-animation.component';
import { VewnListComponent } from './domains/vewn/vewn-list/vewn-list.component';
import { VewnDetailComponent } from './domains/vewn/vewn-detail/vewn-detail.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ], canActivate: [AuthGuard]
    },
    {
        path: 'test',
        children: [
            {
                path: '',
                component: TestComponent,
            },
        ], canActivate: [AuthGuard]
    },
    {
        path: 'vind-een-werknemer',
        data: { breadcrumb: 'Vind een werknemer' },
        children: [
            {
                path: '',
                component: VewnListComponent,
            },
            {
                path: ':id',
                component: VewnDetailComponent,
                data: { breadcrumb: 'Vind een werknemer detail' },
            },
        ]
    },
    {
        path: 'jobs',
        data: { breadcrumb: 'Jobs' },
        children: [
            {
                path: '',
                component: JobSearchComponent,
                data: { breadcrumb: 'Jobs' },
            },
            {
                path: 'vind-een-job',
                data: { breadcrumb: 'Vind een job' },
                children: [
                    {
                        path: '',
                        component: JobListComponent,
                    },
                    {
                        path: ':id',
                        component: JobDetailComponent,
                        data: { breadcrumb: 'Job detail' },
                    },
                ]
            },
        ], canActivate: [AuthGuard]
    },
    {
        path: 'opleidingen',
        data: { breadcrumb: 'Opleidingen' },
        children: [
            {
                path: '',
                component: OpleidingSearchComponent,
                data: { breadcrumb: 'Opleidingen' },
            },
            {
                path: 'vind-een-opleiding',
                data: { breadcrumb: 'Vind een opleiding' },
                children: [
                    {
                        path: '',
                        component: OpleidingListComponent,
                    },
                    {
                        path: ':id',
                        component: OpleidingDetailComponent,
                        data: { breadcrumb: 'Opleiding detail' },
                    },
                ]
            },
        ], canActivate: [AuthGuard]
    },
    {
        path: 'orienteren',
        data: { breadcrumb: 'Oriënteren' },
        children: [
            {
                path: '',
                component: OrienterenSearchComponent,
                data: { breadcrumb: 'Alles over oriënteren' },
            }
        ], canActivate: [AuthGuard]
    },
    // {path:'login', component: LoginComponent, data: { breadcrumb: 'Login'} },
    { path: 'favorites', component: FavoritesComponent, data: { breadcrumb: 'Bewaarde vacatures / opleidingen' }, canActivate: [AuthGuard] },
    { path: 'studieboom', component: StudieboomComponent, data: { breadcrumb: 'Studieboom' }, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, data: { breadcrumb: 'Map' }, canActivate: [AuthGuard] },
    { path: 'mapgl', component: MapglComponent, data: { breadcrumb: 'Map' }, canActivate: [AuthGuard] },
    { path: 'content', component: ContentpageComponent, data: { breadcrumb: 'Content pagina' }, canActivate: [AuthGuard] },
    { path: 'bedankt', component: ThanksComponent, data: { breadcrumb: 'Bedankt voor je aanvraag' }, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'tabbar', component: TabbarAnimationComponent, data: { breadcrumb: 'Tabbar animatie' }, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
