import { Component } from '@angular/core';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.css']
})
export class PlayBarComponent {

  currentTrack: any = {
    trackName: "Let it Happen",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }

}
