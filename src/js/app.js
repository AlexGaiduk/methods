// TODO: write your code here
import Bowman from "./classes/bowman";
import Swordsman from "./classes/swordsman";
import Magician from "./classes/magician";
import Undead from "./classes/undead";
import Zombie from "./classes/zombie";
import Daemon from "./classes/daemon";

const bowman = new bowman("Willy");
console.log(bowman);
const swordsman = new Swordsman("Tally");
console.log(swordsman);
const magician = new Magician("Billy");
console.log(magician);
const undead = new Undead("Tilly");
console.log(undead);
const zombie = new Zombie("Wally");
console.log(zombie);
const daemon = new Daemon("Bally");
console.log(daemon);

bowman.levelUp();