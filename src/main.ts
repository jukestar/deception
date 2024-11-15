import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { bootstrapApplication } from '@angular/platform-browser';

import { TileComponent } from './components/tile.component';

export type Tile = {
  title: string;
  clues: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TileComponent, CdkDrag],
  template: `
    <h1>Deception game</h1>
    <dec-tile [tile]="causeOfDeath"></dec-tile>

    <dec-tile [tile]="randomLocation"></dec-tile>

    <div class="example-box" cdkDrag>
      Drag me around
    </div>
  `,
})
export class App {
  causeOfDeath: Tile = {
    title: "Cause of death",
    clues: [
      "Suffocation",
      "Severe Injury",
      "Loss of Blood",
      "Illness / Disease",
      "Poisoning",
      "Accident"
    ]
  }

  locations: Tile[] = [
    {
      title: "Location of crime",
      clues: [
        "Pub",
        "Bookstore",
        "Restaurant",
        "Hotel",
        "Hospital",
        "Building Site"
      ]
    },
    {
      title: "Location of crime",
      clues: [
        "Living Room",
        "Bedroom",
        "Storeroom",
        "Bathroom",
        "Kitchen",
        "Balcony"
      ]
    },
    {
      title: "Location of crime",
      clues: [
        "Playground",
        "Classroom",
        "Dormitory",
        "Cafeteria",
        "Elevator",
        "Toilet"
      ]
    },
    {
      title: "Location of crime",
      clues: [
        "Vacation Home",
        "Park",
        "Supermarket",
        "School",
        "Woods",
        "Bank"
      ]
    }
  ];

  randomLocation = getRandomElement(this.locations);
}

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

bootstrapApplication(App);
