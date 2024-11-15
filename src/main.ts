import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { TileComponent } from './components/tile.component';

export type Tile = {
  title: string;
  clues: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TileComponent],
  template: `
    <h1>Deception game</h1>
    <dec-tile [tile]="causeOfDeath"></dec-tile>
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
}

bootstrapApplication(App);
