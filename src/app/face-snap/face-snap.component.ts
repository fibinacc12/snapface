import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  isSnaped!: boolean;
  btnText!: string;
  ngOnInit() {
    this.isSnaped = false;
    this.btnText = "Oh Snap!";
  }

  onSnap() {
    this.isSnaped = !this.isSnaped;
    if (!this.isSnaped) {
      this.faceSnap.snaps--;
      this.btnText = "Oh Snap!";
    } else {
      this.faceSnap.snaps++;
      this.btnText = "Oops, un Snap!";
    }
  }
}
