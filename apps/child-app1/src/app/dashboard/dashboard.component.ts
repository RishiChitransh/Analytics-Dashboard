import { Component } from '@angular/core';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    tiles = [
        { label: 'Total', count: 150 },
        { label: 'High', count: 35 },
        { label: 'Medium', count: 60 },
        { label: 'Low', count: 55 },
    ];
    filters = {
        status: '',
        category: '',
        dateRange: '',
    };
    widgets = Array.from({ length: 6 }, (_, i) => ({ title: `Widget ${i + 1}`, value: Math.random() * 100 }));
    gridData = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, status: 'Active' }));

    applyFilters() {
        console.log('Filters Applied:', this.filters);
    }
}