import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    providers: []
})

export class CoreModule {}