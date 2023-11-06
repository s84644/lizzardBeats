import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preview-track',
  templateUrl: './preview-track.component.html',
  styleUrls: ['./preview-track.component.css']
})
export class PreviewTrackComponent {

  isPlaying: boolean = false;

  data = {
    trackName: "Let it Happen",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }

  @ViewChild('playpauseElement') playpauseElement: ElementRef | undefined;

  ngAfterViewInit() {
    const element = this.playpauseElement!.nativeElement;
  }
}
