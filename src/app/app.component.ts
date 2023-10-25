import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World! Current date/time='+ new Date() + ' build date= Built at Tue Oct 24 17:37:03 2023' ;
}
