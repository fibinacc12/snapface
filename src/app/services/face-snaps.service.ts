import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "title",
      description: "description",
      createdDate: new Date(),
      snaps: 102,
      imgUrl: "https://static.freeimages.com/images/home/filetypes/vector.png",
      location: "Tunis"
    },
    {
      id: 2,
      title: "title1",
      description: "description1",
      createdDate: new Date(),
      snaps: 5,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjVA-XgTIsJWXWbdjT8KF0i4zvFUgDy8y7g&usqp=CAU",
      location: "Paris"
    },
    {
      id: 3,
      title: "title2",
      description: "description2",
      createdDate: new Date(),
      snaps: 7,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwUH0CV3wf9sngZ_vr6SV8Au34FUoeaFhlw&usqp=CAU"
    },
    {
      id: 4,
      title: "title",
      description: "description",
      createdDate: new Date(),
      snaps: 1,
      imgUrl: "https://static.freeimages.com/images/home/filetypes/vector.png",
      location: "Tunis"
    },
    {
      id: 5,
      title: "title1",
      description: "description1",
      createdDate: new Date(),
      snaps: 255,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjVA-XgTIsJWXWbdjT8KF0i4zvFUgDy8y7g&usqp=CAU",
      location: "Paris"
    },
    {
      id: 6,
      title: "title2",
      description: "description2",
      createdDate: new Date(),
      snaps: 0,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwUH0CV3wf9sngZ_vr6SV8Au34FUoeaFhlw&usqp=CAU"
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) { return faceSnap; }
    else { throw new Error('FaceSnap not found'); };
  }

  snapFaceSnapById(faceSnapId: number, snapType: false | true): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}