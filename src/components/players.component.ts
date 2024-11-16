import { Component, Input } from "@angular/core";
import {CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { shuffleArray, pickAndRemove } from "../helpers/functions";

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
    players: Player[] = [];
    weapons = shuffleArray(allWeapons());
    keyEvidence = shuffleArray(allKeyEvidence()); 

  addPlayer(name: string): void {
    this.players.push({
      name,
      weapons: pickAndRemove(this.weapons, 4),
      evidence: pickAndRemove(this.keyEvidence, 4),
      hasGuessed: false
    });
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
    "Claymore",
    "Halberd",
    "War Hammer",
    "Tomahawk",
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