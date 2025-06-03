// 📁 shell-app/src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <div class="main-layout">
      <app-side-nav (menuSelected)="onMenuSelected($event)"></app-side-nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
    constructor(private router: Router) {}

    onMenuSelected(menuItem: string) {
        const routeMap: Record<string, string> = {
            Dashboard: 'dashboard',
            Analytics: 'analytics',
            Reports: 'reports',
        };
        this.router.navigate([routeMap[menuItem]]);
    }
}
