import {Component, OnInit, Input} from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

	@Input() public fieldKey: string;

	constructor(private InputOutputService: InputOutputService) {
	}

	ngOnInit() {
	}

}
