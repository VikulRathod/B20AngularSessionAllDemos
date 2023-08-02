import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  posts: Post[] | any = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.posts = this.postService.getAllPosts();
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
