import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Book} from './model';
import {BookService} from './service';

@Component({
    selector: 'my-book',
    templateUrl: 'app/book/edit.html',
    styleUrls: ['app/book/edit.css'],
    providers: [BookService]
})
export class EditComponent implements OnInit {
    public book: Book;

    constructor(private _bookService: BookService, private _routeParams: RouteParams, private _router: Router) {
    }

    ngOnInit() {
        if (!this.book) {
            let id = +this._routeParams.get('id');
            this._bookService.getBook(id).then(book => this.book = book);
        }
    }
    save() {
        if (this.book.name && this.book.price) {
            this._bookService.setBook(this.book)
            .then(status => {
                if (status) {
                    alert('success');
                    this._router.navigate(['List']);
                } else {
                    alert('failed');
                }
            });
        }
    }
}