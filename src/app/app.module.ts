import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { MyOutputComponent } from './my-output/my-output.component';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    MyOutputComponent,
    MyButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
