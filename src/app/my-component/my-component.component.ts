import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [DataService]
})
export class MyComponentComponent implements OnInit {

  constructor(private dataService: DataService) {
    // this.getProgrammeTitle();
   }

  ngOnInit() {
  }
  programmeTitle = {};

  // getProgrammeTitle() {
  //   this.dataService.getProgrammeTitle().subscribe(data => this.programmeTitle = data);
  // }
}
