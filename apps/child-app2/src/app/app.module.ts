import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportsModule } from './reports/reports.module';

@NgModule({
    imports: [BrowserModule, ReportsModule],
    bootstrap: []
})
export class AppModule {}
