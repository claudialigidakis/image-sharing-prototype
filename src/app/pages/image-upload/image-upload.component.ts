import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  postUpload = new FormGroup({
    image: new FormControl(null),
    ref_link: new FormControl(null)
  });  

    constructor(
      private http: HttpClient,
      private fb: FormBuilder
      ){}

    onUpload() {
      this.http.post('/posts/', this.postUpload.value)
        .subscribe(() => {
          console.log("done")
        })
    }
  }


