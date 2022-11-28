import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnaps!: FaceSnap[];

  ngOnInit() {
    this.mySnaps = [
      {
        title: "title",
        description: "description",
        createdDate: new Date(),
        snaps: 102,
        imgUrl: "https://static.freeimages.com/images/home/filetypes/vector.png",
        location: "Tunis"
      },
      {
        title: "title1",
        description: "description1",
        createdDate: new Date(),
        snaps: 5,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjVA-XgTIsJWXWbdjT8KF0i4zvFUgDy8y7g&usqp=CAU",
        location: "Paris"
      },
      {
        title: "title2",
        description: "description2",
        createdDate: new Date(),
        snaps: 7,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwUH0CV3wf9sngZ_vr6SV8Au34FUoeaFhlw&usqp=CAU"
      },
      {
        title: "title",
        description: "description",
        createdDate: new Date(),
        snaps: 1,
        imgUrl: "https://static.freeimages.com/images/home/filetypes/vector.png",
        location: "Tunis"
      },
      {
        title: "title1",
        description: "description1",
        createdDate: new Date(),
        snaps: 255,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjVA-XgTIsJWXWbdjT8KF0i4zvFUgDy8y7g&usqp=CAU",
        location: "Paris"
      },
      {
        title: "title2",
        description: "description2",
        createdDate: new Date(),
        snaps: 0,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwUH0CV3wf9sngZ_vr6SV8Au34FUoeaFhlw&usqp=CAU"
      }
    ];
  }
}
