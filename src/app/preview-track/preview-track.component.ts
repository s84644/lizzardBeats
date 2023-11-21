import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlayerService } from '../shared.service';

@Component({
  selector: 'app-preview-track',
  templateUrl: './preview-track.component.html',
  styleUrls: ['./preview-track.component.css']
})
export class PreviewTrackComponent implements OnInit {

  currentTrack = '';

  constructor(public playerService: PlayerService) {}

  //sorgt dafuer das wenn ein track gestartet wird, anderer track der lauft gestoppt wird 

  ngOnInit(): void {
    this.playerService.currentMessage.subscribe(message => {
      this.currentTrack = message;
      if(this.currentTrack === this.data.trackName){
        this.isChecked = false;
      }
      else {
        this.isChecked = true;
      }
    })
  }

  @Input() isPlaying: boolean = false;

  isChecked: boolean = true;

  @Input() data: any;

  onClick() {
    console.log(this.playerService.isPlaying)

    this.playerService.togglePlayState(this.data.trackName, 'test')

    // if(this.playerService.isPlaying) {
    //   this.isChecked = false;
    //   this.playerService.togglePlayState();
    // }

    // if(!this.isPlaying){
    //   this.currentTrack.emit({data: this.data, status: "start"});
    //   this.isPlaying = true;
    // }
    // else{
    //   this.currentTrack.emit({data: this.data, status: "stop"});
    //   this.isPlaying = false;
    // }
    // console.log(this.isChecked)
  }

  test(){
    this.isChecked = true;
  }

  // @ViewChild('playpauseElement') playpauseElement: ElementRef | undefined;

  // ngAfterViewInit() {
  //   const element = this.playpauseElement!.nativeElement;
  // }
}
