import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts;

  constructor(public dataService: DataService) { }

  ngOnInit() {
   this.posts = this.dataService.getPosts();
  }
}
