import { Component, Input } from "@angular/core";
import {CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { TileComponent } from './tile.component';
import { getRandomElement, shuffleArray } from "../helpers/functions";

export type Tile = {
    title: string;
    clues: string[];
}

@Component({
    standalone: true,
    imports: [CdkDrag, CdkDropList, CommonModule, TileComponent],
    styleUrl: "tiles.component.scss",
    selector: "dec-tiles",
    templateUrl: "tiles.component.html"
})
export class TilesComponent {
    causeOfDeath = getCauseOfDeath();
    randomLocation = getLocation();
    allClueTiles = clueTiles();

    firstFourCluesTiles = this.allClueTiles.slice(0, 4);
}



function getCauseOfDeath(): Tile {
return {
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
}

function getLocation(): Tile {
    const locations: Tile[] = [
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

      return getRandomElement(locations)
}

function clueTiles(): Tile[] {
    const tiles: Tile[] = [
        {
          "title": "Sudden incident",
          "clues": ["Power Failure", "Fire", "Conflict", "Loss of Valuables", "Scream", "Nothing"]
        },
        {
          "title": "Victim's clothes",
          "clues": ["Neat", "Untidy", "Elegant", "Shabby", "Bizarre", "Naked"]
        },
        {
          "title": "Trace at the scene",
          "clues": ["Fingerprint", "Footprint", "Bruise", "Blood Stain", "Bodily Fluid", "Scar"]
        },
        {
          "title": "Murderer's personality",
          "clues": ["Arrogant", "Despicable", "Furious", "Greedy", "Forceful", "Perverted"]
        },
        {
          "title": "Victim's expression",
          "clues": ["Peaceful", "Struggling", "Frightened", "In Pain", "Blank", "Angry"]
        },
        {
          "title": "Hint on corpse",
          "clues": ["Head", "Chest", "Hand", "Leg", "Partial", "All-over"]
        },
        {
          "title": "In progress",
          "clues": ["Entertainment", "Relaxation", "Assembly", "Trading", "Visit", "Dining"]
        },
        {
          "title": "Social relationship",
          "clues": ["Relatives", "Friends", "Colleagues", "Employer/Employee", "Lovers", "Strangers"]
        },
        {
          "title": "Noticed by bystander",
          "clues": ["Sudden sound", "Prolonged sound", "Smell", "Visual", "Action", "Nothing"]
        },
        {
          "title": "General impression",
          "clues": ["Common", "Creative", "Fishy", "Cruel", "Horrible", "Suspenseful"]
        },
        {
          "title": "Day of crime",
          "clues": ["Weekday", "Weekend", "Spring", "Summer", "Autumn", "Winter"]
        },
        {
          "title": "Weather",
          "clues": ["Sunny", "Stormy", "Dry", "Humid", "Cold", "Hot"]
        },
        {
          "title": "Evidence left behind",
          "clues": ["Natural", "Artistic", "Written", "Synthetic", "Personal", "Unrelated"]
        },
        {
          "title": "Time of death",
          "clues": ["Dawn", "Morning", "Noon", "Afternoon", "Evening", "Night"]
        },
        {
          "title": "Duration of crime",
          "clues": ["Instantaneous", "Brief", "Gradual", "Prolonged", "Few Days", "Unclear"]
        },
        {
          "title": "State of the scene",
          "clues": ["Bits and Pieces", "Ashes", "Water Stain", "Cracked", "Disorderly", "Tidy"]
        },
        {
          "title": "Victim's occupation",
          "clues": ["Boss", "Professional", "Worker", "Student", "Unemployed", "Retired"]
        },
        {
          "title": "Victim's build",
          "clues": ["Large", "Thin", "Tall", "Short", "Disfigured", "Fit"]
        },
        {
          "title": "Victim's identity",
          "clues": ["Child", "Young Adult", "Middle-Aged", "Senior", "Male", "Female"]
        },
        {
          "title": "Corpse condition",
          "clues": ["Still Warm", "Stiff", "Decayed", "Incomplete", "Intact", "Twisted"]
        },
        {
          "title": "Motive of crime",
          "clues": ["Hatred", "Power/Money", "Lovers", "Jealousy", "Justice"]
        }
      ];

    return shuffleArray(tiles);
}

