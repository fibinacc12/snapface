import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService, 
      private route: ActivatedRoute) { }

  faceSnap!: FaceSnap;
  isSnaped!: boolean;
  btnText!: string;
  ngOnInit() {
    this.isSnaped = false;
    this.btnText = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    this.isSnaped = !this.isSnaped;
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.isSnaped);
    !this.isSnaped ? this.btnText = "Oh Snap!" : this.btnText = "Oops, un Snap!";

  }

}
