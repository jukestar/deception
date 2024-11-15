import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Deception game</h1>
  `,
})
export class App {}

bootstrapApplication(App);
