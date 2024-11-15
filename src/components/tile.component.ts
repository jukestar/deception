import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "dec-tile",
    template: `
        <h3>{{ tile?.title }}</h3>
        <ul>
        @for (clue of tile?.clues; track clue) {
            <li>{{ clue }}</li>
        }
        </ul>
    `,
})
export class TileComponent {
    @Input()
    tile: any;
}
