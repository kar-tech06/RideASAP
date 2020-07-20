import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  jrny=this.travel.jrny;
  name="";
  email="";
  age="";
  price="";
  totalTime="";
  date="";

  constructor(private travel: TravelService) { }
  ngOnInit(): void {
  }

}
