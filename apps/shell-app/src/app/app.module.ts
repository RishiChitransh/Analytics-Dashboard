// 📁 shell-app/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TabContainerModule } from './tab-container/tab-container.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LayoutModule,
        TabContainerModule,
        RouterModule.forRoot([
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('childApp1/DashboardModule').then((m) => m.DashboardModule),
            },
            {
                path: 'analytics',
                loadChildren: () =>
                    import('childApp1/AnalyticsModule').then((m) => m.AnalyticsModule),
            },
            {
                path: 'reports',
                loadChildren: () =>
                    import('childApp2/ReportsModule').then((m) => m.ReportsModule),
            },
        ]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
