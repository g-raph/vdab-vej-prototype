import { Routes } from '@angular/router';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './jobs/job-search/job-search.component';

export const routes: Routes = [
    {path:'zoek-een-job', component: JobSearchComponent},
    {path:'vind-een-job', component: JobListComponent},
    {path:'vind-een-job/:id', component: JobDetailComponent},
    {path:'**', redirectTo:'zoek-een-job'},
];
