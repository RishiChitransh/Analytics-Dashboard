module.exports = {
    name: 'shellApp',
    remotes: {
        childApp1: 'childApp1@http://localhost:4201/remoteEntry.js',
        childApp2: 'childApp2@http://localhost:4202/remoteEntry.js',
    },
    shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        'primeng': { singleton: true, strictVersion: true },
        'ag-grid-angular': { singleton: true, strictVersion: true },
    },
};