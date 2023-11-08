import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preview-track',
  templateUrl: './preview-track.component.html',
  styleUrls: ['./preview-track.component.css']
})
export class PreviewTrackComponent {

  @Input() isPlaying: boolean = false;

  @Input() data: any;
  @Output() currentTrack = new EventEmitter<any>();

  onClick() {
    if(!this.isPlaying){
      this.currentTrack.emit({data: this.data, status: "start"});
      this.isPlaying = true;
    }
    else{
      this.currentTrack.emit({data: this.data, status: "stop"});
      this.isPlaying = false;
    }
  }

  // @ViewChild('playpauseElement') playpauseElement: ElementRef | undefined;

  // ngAfterViewInit() {
  //   const element = this.playpauseElement!.nativeElement;
  // }
}
