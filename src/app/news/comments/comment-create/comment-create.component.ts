import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  

  newPost = '';
  enteredValue = '';

  onAddPost() { 
    this.newPost = this.enteredValue
  }
  constructor() { }

  ngOnInit() {
  }

}
