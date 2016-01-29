import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from './book/list.com';
import {EditComponent} from './book/edit.com';
import {DashboardComponent} from './dashboard/dash.com';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['List']">Books</a>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/style.css'],
    directives: [ROUTER_DIRECTIVES] 
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/book', name: 'List', component: ListComponent },
    { path: '/book/:id', name: 'Edit', component: EditComponent }
])

export class AppComponent {
    public title = 'Book Center';
}