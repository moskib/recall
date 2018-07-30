import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this service is used to modify various strings used throughout the application
export class StringService {

  constructor() { }

  // Capitalizes the first letter of a string
  // Ex: titleCase("firstName lastName") = Firstname Lastname
  public titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}
