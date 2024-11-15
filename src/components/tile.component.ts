import { Component, Input } from "@angular/core";
import {CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    standalone: true,
    imports: [CdkDrag, CdkDropList],
    selector: "dec-tile",
    template: `
        <h3>{{ tile?.title }}</h3>

        <ul cdkDropList (cdkDropListDropped)="drop($event)">
            @for (clue of tile?.clues; track clue) {
                <li cdkDrag>{{ clue }}</li>
            }
        </ul>
    `,
})
export class TileComponent {
    @Input()
    tile: any;

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tile.clues, event.previousIndex, event.currentIndex);
      }
}
