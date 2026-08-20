import projectPageData from "./project-pages/projectPageData.js"

//project cards class
class ProjectCards {

    constructor(thumbnail, header, description, id) {
        this.thumbnail = thumbnail;
        this.header = header;
        this.description= description;
        this.id = id;
    }
}

//create card objects with data
var cards= []


//balloon scape card
const balloonScapeCard = new ProjectCards (
    "code/images/balloon-scape/balloon-scape-thumbnail.png", 
    "Balloon-Scape", 
    "Explore a vast, 2D open world, packed with unique locations, enemies, and items to collect. Play as an adventurous wizard, scouring across the land, desperately in search of the 4 keys to a getaway-hot air balloon that will let him escape the planet before its fated destruction",
    "balloon-scape")

cards.push(balloonScapeCard)

//Anki card
const ankiCard = new ProjectCards (
    "code/images/anki/anki-thumbnail.svg", 
    "Mandarin Anki Deck", 
    "Anki flashcards for Mandarin Chinese with AI generated translations, notes, and example sentences modeled off of Stephen Krashen's i+1 principle",
    "anki-deck")

cards.push(ankiCard)

//My little cults card
const myLittleCultsCard = new ProjectCards (
    "code/images/my-little-cults/mlc-thumbnail.png", 
    "My Little Cults", 
    "A game developed for a game jam in which you must balance the populations of two parallel cults",
    "my-little-cults")

cards.push(myLittleCultsCard)


//My little cults card
const monsterMash = new ProjectCards (
    "code/images/monster-mash/monster-mash-thumbnail.png", 
    "Monster Mash", 
     "Classrom management website for keeping track of student points, with sensory feedback to encourage good behavior",
    "monster-mash")


cards.push(monsterMash)



export default cards
