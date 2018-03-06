import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { MyOutputComponent } from './my-output/my-output.component';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';
import { InputOutputService } from "./input-output-service/input-output.service";
import { MyInputsComponent } from './my-inputs/my-inputs.component';
import { MyTwoWayComponent } from './my-two-way/my-two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    MyOutputComponent,
    MyButtonsComponent,
    MyInputsComponent,
    MyTwoWayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [InputOutputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
