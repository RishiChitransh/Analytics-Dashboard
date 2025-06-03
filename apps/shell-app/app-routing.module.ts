import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContainerComponent } from './tab-container/tab-container.component';

const routes: Routes = [
    { path: 'tab/:app/:module', component: TabContainerComponent },
    { path: '', redirectTo: '/tab/dashboard-app/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}