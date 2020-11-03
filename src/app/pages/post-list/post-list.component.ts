import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
 posts;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
      this.http.get('/posts')
        .subscribe((res) => {
          console.log("res", res);
          this.posts = res;
      })
  }
}
