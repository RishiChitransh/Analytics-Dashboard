{
    path: 'child1/dashboard',
        loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './DashboardModule'
}).then(m => m.DashboardModule)
}