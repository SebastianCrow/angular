import { Component, OnInit } from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";

@Component({
  selector: 'my-buttons',
  templateUrl: './my-buttons.component.html',
  styleUrls: ['./my-buttons.component.scss'],
  providers: [ InputOutputService ]
})
export class MyButtonsComponent implements OnInit {

  constructor(private InputOutputService: InputOutputService) { }

  ngOnInit() {
  }

}
