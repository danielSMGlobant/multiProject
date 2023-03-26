import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-withtout-template',
  template: `
    <p>
      demo-withtout-template works!
    </p>
  `,
  styles: [
  ]
})
export class DemoWithtoutTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
