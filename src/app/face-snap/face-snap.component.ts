import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService,
    private router: Router) { }

  @Input() faceSnap!: FaceSnap;
  isSnaped!: boolean;
  btnText!: string;
  ngOnInit() {
    this.isSnaped = false;
    this.btnText = "Oh Snap!";
  }

  onSnap() {
    this.isSnaped = !this.isSnaped;
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.isSnaped);
    !this.isSnaped ? this.btnText = "Oh Snap!" : this.btnText = "Oops, un Snap!";
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
