import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { AnalyticsModule } from './analytics/analytics.module';

@NgModule({
    imports: [BrowserModule, DashboardModule, AnalyticsModule],
    bootstrap: []
})
export class AppModule {}
