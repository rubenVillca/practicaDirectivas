import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'USA'
    }
  ];

  ngOnInit(): void {
  }
}
