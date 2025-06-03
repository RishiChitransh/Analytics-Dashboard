import { Component } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html'
})
export class SideNavComponent {
    menus = [
        { label: 'Dashboard App', items: ['Dashboard', 'Analytics'] },
        { label: 'Reports App', items: ['Reports'] }
    ];

    formatApp(label: string): string {
        return label.toLowerCase().replace(/\s+/g, '-'); // e.g., "Dashboard App" -> "dashboard-app"
    }

    formatModule(item: string): string {
        return item.toLowerCase();
    }

    onSelect(item: string) {
        this.menuSelected.emit(item);
    }
}
