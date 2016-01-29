import {Injectable} from 'angular2/core';
import {BOOKS} from './mock';
import {Book} from './model';


@Injectable()

export class BookService {
    getBookList() {
        return new Promise<Book[]>(resolve =>
            setTimeout(() => resolve(BOOKS), 2000)
        );
    }
    getTop5() {
        return new Promise<Book[]>(resolve =>
            setTimeout(() => resolve(
                BOOKS.sort((a, b) => parseInt(b.price) - parseInt(a.price)).filter((v, i) => i < 5)
            ), 1000)
        )
    }

    getBook(id) {
        return new Promise<Book>(resolve =>
            setTimeout(() => resolve(BOOKS.filter(h => h.id === id)[0]), 1000)
        );
    }

    setBook(book) {
        return new Promise<Boolean>(resolve =>
            setTimeout(() => {
                let status = false;
                BOOKS.forEach(v => {
                    if (v.id === book.id) {
                        status = true;
                        v = book;
                    }
                });
                resolve(status);
            }, 1000)
        );
    }
}