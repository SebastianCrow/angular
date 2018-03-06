import { Component, OnInit } from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";

@Component({
  selector: 'my-output',
  templateUrl: './my-output.component.html',
  styleUrls: ['./my-output.component.scss'],
  providers: [ InputOutputService ]
})
export class MyOutputComponent implements OnInit {

  constructor(private InputOutputService: InputOutputService) { }

  ngOnInit() {
  }

}
