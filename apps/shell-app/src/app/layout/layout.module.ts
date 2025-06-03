import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SideNavComponent } from './side-nav.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SideNavComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent, SideNavComponent]
})
export class LayoutModule {}
