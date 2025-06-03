module.exports = {
    name: 'childApp2',
    filename: 'remoteEntry.js',
    exposes: {
        './ReportsModule': './src/app/reports/reports.module.ts',
    },
    shared: ['@angular/core', '@angular/common', '@angular/router', 'primeng', 'ag-grid-angular'],
};