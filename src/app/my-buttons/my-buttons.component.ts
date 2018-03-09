import { Component, OnInit } from '@angular/core';
import {InputOutputService} from "../input-output-service/input-output.service";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'my-buttons',
  templateUrl: './my-buttons.component.html',
  styleUrls: ['./my-buttons.component.scss']
})
export class MyButtonsComponent implements OnInit {

	public closeResult: string;

	constructor(private InputOutputService: InputOutputService, private modalService: NgbModal) { }

	ngOnInit() {
	}

	public open(content) {
		this.modalService.open(content).result.then((result) => {
			this.clearName();
			this.closeResult = `Name cleared. Closed with: ${result}`;
		}, (reason) => {
			this.clearName();
			this.closeResult = `Name cleared. Dismissed ${MyButtonsComponent.getDismissReason(reason)}`;
		});
	}

	private clearName(): void {
		this.InputOutputService.firstName = "";
		this.InputOutputService.lastName = "";
	}

	private static getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
