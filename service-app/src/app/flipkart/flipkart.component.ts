import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  posts: Post[] | any = [];
  message: string | any = 'Processing..';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.posts = [
    //   { userId: 1, id: 1, title: 'post 1', body: 'post 1 body' },
    //   { userId: 2, id: 2, title: 'post 2', body: 'post 2 body' },
    //   { userId: 3, id: 3, title: 'post 3', body: 'post 3 body' },
    //   { userId: 4, id: 4, title: 'post 4', body: 'post 4 body' },
    //   { userId: 5, id: 5, title: 'post 5', body: 'post 5 body' }
    // ];

    //  this.posts = this.postService.getAllPosts();

    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    },
      (error) => {
        // this.message = error.message;
        this.message = 'Error in calling API. Try after sometime.';
      });
  }

}
