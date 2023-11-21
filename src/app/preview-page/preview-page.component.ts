import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent {

  currentTrack: any = {
    trackName: "Let it Happen",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }

  onTrackChange(data: any){
    console.log(data)
  }

  tracks = [{
    trackName: "Let it Happen",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  },
  {
    trackName: "Let it Happen234",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  },
  {
    trackName: "Let it Happen2323",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  },{
    trackName: "Let it Happen123",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }
  ,{
    trackName: "Let it Happen567",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }
  ,{
    trackName: "Let it Happengdfg",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }
  ,{
    trackName: "Let it Happenqsdead",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  },
  {
    trackName: "Let it Happeead324",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }
]

}
