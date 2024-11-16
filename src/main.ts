import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { bootstrapApplication } from '@angular/platform-browser';

import { TilesComponent } from './components/tiles.component';
import { PlayersComponent } from './components/players.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TilesComponent, PlayersComponent],
  template: `
    <div style="display: flex; gap: 0.5rem;">
      <dec-players></dec-players>
      <dec-tiles></dec-tiles>
    </div>
  `
})
export class App {
  currentRound = 1;
}

bootstrapApplication(App);
