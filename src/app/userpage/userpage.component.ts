import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private service:ImageService) { }
  imageList: any[];
  ngOnInit() {
    // function from the image service
    this.service.getImageDetailList();
    this.service.imageDetailList.snapshotChanges().subscribe(     // subscribe to observable & call snapshotChanges function returns all the image file details
      // call back function w paramater list
      list => {
        // maps callback func returns caption, imageurl, and catagory and save in new array
        this.imageList = list.map(item => { return item.payload.val(); });
        //
        //this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );

  }

}
