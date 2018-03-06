import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirectiveDirective implements OnInit {

	@Input()
	public color: string;

	constructor(private element: ElementRef,
	            private renderer: Renderer2) {
	}

	ngOnInit() {
		// this.color is not ready in constructor
		this.renderer.setStyle(this.element.nativeElement, "background-color", this.color ? this.color : 'green');
	}
}
