import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [ngStyle]="{'color':color}">{{title}}</h1>
    <br />
  
    <div [ngStyle]="{'display':'inline-block'}">
        <input #inputBox class="form-control form-inline" (keyup)="test($event)" value="{{inputText}}" />
    </div>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test!';
  color: string = "navy";
  inputText: string = "navy"
  inputBox: any;
  
  test(event: any){
    this.color = event.target.value;
  }
}
