import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { pickAndRemove, shuffleArray } from "../helpers/functions";
import { GameState } from "../main";

type Player = {
  name: string;
  weapons: string[];
  evidence: string[];
  hasGuessed: boolean;
}

@Component({
    standalone: true,
    imports: [CdkDrag, CdkDropList, CommonModule],
    styleUrl: "players.component.scss",
    selector: "dec-players",
    templateUrl: "players.component.html"
})
export class PlayersComponent {
  @Input()
  gameState: GameState | null = null;

  @Output()
  setGameState = new EventEmitter<GameState>();

    players: Player[] = [];
    weapons = shuffleArray(allWeapons());
    keyEvidence = shuffleArray(allKeyEvidence()); 

    get isAddingPlayers(): boolean {
      return this.gameState === GameState.AddPlayers;
    }

    get gameStateText(): string {
      switch (this.gameState) {
        case GameState.AddPlayers:
          return "Add all the players. Start the game when ready."
        case GameState.FirstRound:
          return "First round. Provide clues. Advance when discussion is finished.";
        case GameState.ReplaceFirstClueTile:
          return "Replace an orange clue tile";
        case GameState.SecondRound:
          return "Second round. Provide a clue for the new tile. Advance when discussion is finished.";
        case GameState.ReplaceSecondClueTile:
          return "Replace another orange clue tile";
        case GameState.ThirdRound:
          return "Third and final round. Provide a clue for the new tile.";

        default:
          return "";
      }
    }

    get isFirstRound(): boolean {
      return this.gameState === GameState.FirstRound
    }

    get isSecondRound(): boolean {
      return this.gameState === GameState.SecondRound
    }

    advance(): void {
      if (this.isFirstRound) {
        this.setGameState.emit(GameState.ReplaceFirstClueTile);
      }
      if (this.isSecondRound) {
        this.setGameState.emit(GameState.ReplaceSecondClueTile);
      }
    }

    provideGuess(player: Player, hasGuessedAlready: boolean): void {
      if (hasGuessedAlready) {
        if (window.confirm("Are you sure? Only on guess for the entire game per player!")) {
          player.hasGuessed = false;
        }
      } else {
        player.hasGuessed = true;
      }
    }

  addPlayer(name: string): void {
    this.players.push({
      name,
      weapons: pickAndRemove(this.weapons, 4),
      evidence: pickAndRemove(this.keyEvidence, 4),
      hasGuessed: false
    });
  }

  handleKeypress(event: KeyboardEvent, dialog: HTMLDialogElement, nameInput: HTMLInputElement): void {
    if (event.key === "Enter") {
      this.addPlayer(nameInput.value);
      nameInput.value = "";
      dialog.close();
      
    }
  }

  startGame(): void {
    if (this.players.length > 2) {
      this.setGameState.emit(GameState.FirstRound);
    } else {
      alert("Too few players, add more! Need atleast 3 players in addition to the Forensic scientist");
    }
  }
}

function allKeyEvidence(): string[] {
  const keyEvidence: string[] = [
    "Antique",
    "Badge",
    "Bandage",
    "Bell",
    "Belt",
    "Blood Stain",
    "Book",
    "Bottle",
    "Bracelet",
    "Broken Glass",
    "Bullet",
    "Button",
    "Candle",
    "Card",
    "Chain",
    "Chalk",
    "Cloth",
    "Coin",
    "Comb",
    "Contract",
    "Cup",
    "Curtain",
    "Diary",
    "Doll",
    "Dust",
    "Envelope",
    "Fan",
    "Feather",
    "Film",
    "Fingerprint",
    "Fire Extinguisher",
    "Flower",
    "Food",
    "Glove",
    "Hair",
    "Handkerchief",
    "Hat",
    "Hourglass",
    "ID Card",
    "Ink",
    "Jewelry",
    "Key",
    "Knife",
    "Leaf",
    "Letter",
    "Lipstick",
    "Locket",
    "Mask",
    "Medicine",
    "Mirror",
    "Money",
    "Necklace",
    "Newspaper",
    "Note",
    "Paint",
    "Paper",
    "Perfume",
    "Photo",
    "Pillow",
    "Plant",
    "Plastic Bag",
    "Poison",
    "Poster",
    "Powder",
    "Razor",
    "Ribbon",
    "Ring",
    "Rope",
    "Sand",
    "Scarf",
    "Scissors",
    "Screw",
    "Seal",
    "Shirt",
    "Shoe",
    "Soap",
    "Sock",
    "Spoon",
    "Stamp",
    "Sticker",
    "String",
    "Suitcase",
    "Sunglasses",
    "Syringe",
    "Table Lamp",
    "Tape",
    "Ticket",
    "Tissue",
    "Toothbrush",
    "Toy",
    "Towel",
    "Trophy",
    "Umbrella",
    "Vase",
    "Wallet",
    "Watch",
    "Whistle",
    "Wig"
];
return keyEvidence;
}

function allWeapons(): string[] {
  return [
    "Pistol",
    "Rope",
    "Knife",
    "Poison",
    "Axe",
    "Baseball Bat",
    "Scissors",
    "Brick",
    "Shovel",
    "Dumbbell",
    "Candlestick",
    "Wrench",
    "Hammer",
    "Pillow",
    "Plastic Bag",
    "Belt",
    "Trophy",
    "Frying Pan",
    "Dart",
    "Garrote",
    "Chainsaw",
    "Dagger",
    "Explosives",
    "Fire Extinguisher",
    "Golf Club",
    "Iron",
    "Lamp",
    "Lethal Injection",
    "Machete",
    "Meat Cleaver",
    "Nail Gun",
    "Poisonous Gas",
    "Spear",
    "Syringe",
    "Taser",
    "Tire Iron",
    "Whip",
    "Crossbow",
    "Katana",
    "Bow and Arrow",
    "Molotov Cocktail",
    "Boiling Water",
    "Electric Chair",
    "Harpoon",
    "Laser Gun",
    "Nunchaku",
    "Trident",
    "Flamethrower",
    "Mace",
    "Morning Star",
    "Throwing Stars",
    "Blowgun",
    "Bo Staff",
    "Bear Trap",
    "Claymore",
    "Halberd",
    "War Hammer",
    "Tomahawk",
    "Grenade",
    "Sling",
    "Caltrops",
    "Brass Knuckles",
    "Pepper Spray",
    "Taser",
    "Chains",
    "Crowbar",
    "Sledgehammer",
    "Ice Pick",
    "Meat Tenderizer",
    "Rolling Pin",
    "Spiked Bat",
    "Screwdriver",
    "Drill",
    "Circular Saw",
    "Hatchet",
    "Pickaxe",
    "Scythe",
    "Pitchfork",
    "Sickle",
    "Bolt Cutters",
    "Fire Poker",
    "Letter Opener",
    "Paperweight",
    "Stapler",
    "Razor Blade",
    "Box Cutter",
    "Utility Knife",
    "Fishing Hook",
    "Anchor",
    "Oar",
    "Boat Propeller"];
}