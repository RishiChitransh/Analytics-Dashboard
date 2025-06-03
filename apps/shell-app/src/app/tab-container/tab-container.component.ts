import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-container',
    templateUrl: './tab-container.component.html'
})
export class TabContainerComponent {
    tabs: { title: string, url: string }[] = [];

    openTab(title: string, url: string) {
        if (!this.tabs.find(t => t.title === title)) {
            this.tabs.push({ title, url });
        }
    }

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
