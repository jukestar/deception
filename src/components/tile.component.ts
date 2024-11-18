import { Component, EventEmitter, Input, Output } from "@angular/core";
import {CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { Tile } from "./tiles.component";

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
    canBeReplaced: boolean = false;

    @Input()
    tile: Tile | null = null;

    @Input()
    color: Color = "orange";

    @Output()
    replaceTile = new EventEmitter<void>();

    activeClue = "";

    // drop(event: CdkDragDrop<string[]>) {
    //     moveItemInArray(this.tile.clues, event.previousIndex, event.currentIndex);
    // }

    replace(): void {
        this.replaceTile.emit();
    }

    setClueAsActive(clue: string): void {
        if (this.activeClue === "") {
            this.activeClue = clue;
        } else {
            if (window.confirm("Are you sure? Changing the selected clue on a tile is not allowed!")) {
                this.activeClue = clue;
            }
        }
    }

    getIsActiveClue(clue: string): boolean {
        return this.activeClue === clue;
    }
}
