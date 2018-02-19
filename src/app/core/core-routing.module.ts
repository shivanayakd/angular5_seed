import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const coreRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CoreRoutingModule {}