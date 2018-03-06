import { Component, OnInit } from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  providers: [ InputOutputService ]
})
export class MyInputComponent implements OnInit {

  constructor(private InputOutputService: InputOutputService) {

  }

  ngOnInit() {
  }

}
