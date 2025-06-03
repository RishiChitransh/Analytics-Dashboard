import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    exports: [ButtonModule, PanelModule, TabViewModule]
})
export class PrimeNgSharedModule {}