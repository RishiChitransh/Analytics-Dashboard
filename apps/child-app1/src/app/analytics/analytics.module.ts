import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AnalyticsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AnalyticsComponent
            }
        ])
    ]
})
export class AnalyticsModule {}
