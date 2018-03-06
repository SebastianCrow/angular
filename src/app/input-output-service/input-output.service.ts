import { Injectable } from '@angular/core';

@Injectable()
export class InputOutputService {

  public firstName: string = "";
  public lastName: string = "";

  public get fullName(): string
  {
    if (!this.firstName || !this.lastName)
    {
      return "You don't have a name!";
    }
    return `${this.firstName} ${this.lastName}`;
  }

  constructor() { }

}
