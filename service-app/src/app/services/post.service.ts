import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http : HttpClient){}

  getAllPosts() {
    // return [
    //   { userId: 1, id: 1, title: 'post 1', body: 'post 1 body' },
    //   { userId: 2, id: 2, title: 'post 2', body: 'post 2 body' },
    //   { userId: 3, id: 3, title: 'post 3', body: 'post 3 body' },
    //   { userId: 4, id: 4, title: 'post 4', body: 'post 4 body' },
    //   { userId: 5, id: 5, title: 'post 5', body: 'post 5 body' }
    // ];

    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(catchError(error => {
      return throwError(() => new Error(error.message));
    }));
  }
}
