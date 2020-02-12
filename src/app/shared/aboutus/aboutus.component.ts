import { Component, OnInit } from '@angular/core';
import {moveIn, fallIn} from 'src/app/router.animation';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [moveIn(), fallIn()],
  //host: {' @moveIn': ''}
})
export class AboutusComponent implements OnInit {
  state: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
