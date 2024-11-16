import { Component, Input } from "@angular/core";
import {CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";

type Color = "orange" | "purple" | "green";

@Component({
    standalone: true,
    imports: [CdkDrag, CdkDropList, CommonModule],
    styleUrl: "tile.component.scss",
    selector: "dec-tile",
    templateUrl: "tile.component.html"
})
export class TileComponent {
    @Input()
    tile: any;

    @Input()
    color: Color = "orange";

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tile.clues, event.previousIndex, event.currentIndex);
    }
}
