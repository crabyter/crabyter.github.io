import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>我的第一个组件</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = `美味螃蟹市场`;
}
