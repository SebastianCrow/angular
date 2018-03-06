import {Component, OnInit, Renderer2, ElementRef} from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";

@Component({
  selector: 'my-output',
  templateUrl: './my-output.component.html',
  styleUrls: ['./my-output.component.scss']
})
export class MyOutputComponent implements OnInit {

	public get color(): string {
		return this.InputOutputService.highlighted ? 'orange' : 'black';
	}

	constructor(private InputOutputService: InputOutputService,
	            private element: ElementRef,
	            private renderer: Renderer2) {

//		renderer.setStyle(element.nativeElement, "background-color", "orange");
	}

	ngOnInit() {
	}
}
