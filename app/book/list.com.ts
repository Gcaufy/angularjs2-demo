import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Book} from './model';
import {BookService} from './service';

@Component({
    selector: 'my-book',
    templateUrl: 'app/book/list.html',
    styleUrls: ['app/book/list.css'],
    providers: [BookService]
})
export class ListComponent implements OnInit {
    public books: Book[];
    public title = 'Tour of Bookes';
    public selectedBook: Book;

    constructor(private _bookService: BookService, private _router: Router) { 
    }

    ngOnInit() {
        this.getBookList();
    }

    getBookList() {
        this._bookService.getBookList().then(books => this.books = books);
    }

    onSelect(book: Book) {
        this.selectedBook = book;
    }

    gotoDetail() {
        this._router.navigate(['Edit', { id: this.selectedBook.id }]);
    }


}