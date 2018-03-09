import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-two-way',
  templateUrl: './my-two-way.component.html',
  styleUrls: ['./my-two-way.component.scss']
})
export class MyTwoWayComponent implements OnInit {

	@Input()
	public field: string;

	@Output()
	public fieldChange: EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {
	}

	public changeField(): void {
		this.field = "My Two Way Component";
		this.fieldChange.emit(this.field);
	}
}
