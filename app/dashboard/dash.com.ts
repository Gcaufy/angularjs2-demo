import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Book} from './../book/model';
import {BookService} from './../book/service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dash.com.html',
    styleUrls: ['app/dashboard/dash.com.css'],
    providers: [BookService]
})


export class DashboardComponent implements OnInit {
    public books: Book[];

    constructor(private _router: Router, private _bookService: BookService) { }

    ngOnInit() {
        this._bookService.getTop5().then(books => this.books = books);
    }

    gotoDetail(book) {
        this._router.navigate(['Edit', { id: book.id }]);
    }
}
