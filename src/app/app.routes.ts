import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

export const routes: Routes = [
    {path:'vind-een-job', component: JobListComponent},
    {path:'vind-een-job/:id', component: JobDetailComponent},
    {path:'**', redirectTo:'vind-een-job'},
];
