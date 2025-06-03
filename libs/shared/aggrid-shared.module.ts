import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [AgGridModule.withComponents([])],
    exports: [AgGridModule]
})
export class AgGridSharedModule {}