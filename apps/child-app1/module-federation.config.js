module.exports = {
    name: 'childApp1',
    filename: 'remoteEntry.js',
    exposes: {
        './DashboardModule': './src/app/dashboard/dashboard.module.ts',
        './AnalyticsModule': './src/app/analytics/analytics.module.ts'
    },
    shared: ['@angular/core', '@angular/common', '@angular/router', 'primeng', 'ag-grid-angular'],
};