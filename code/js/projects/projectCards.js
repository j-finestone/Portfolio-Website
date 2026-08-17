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
    "Explore a vast, 2D open world, packed with all sorts of unique locations, enemies, and items to collect. Play as an adventurous wizard, scouring across the land, desperately in search of the 4 keys to a getaway-hot air balloon that will let him escape the planet before its fated destruction.",
    "balloon-scape")

cards.push(balloonScapeCard)

//Anki card
const ankiCard = new ProjectCards (
    "code/images/anki/anki-thumbnail.png", 
    "Mandarin Anki Deck", 
    "Anki flashcards with AI generated translations, i+1 example sentence, and notes",
    "anki-deck")

cards.push(ankiCard)

//My little cults card
const myLittleCultsCard = new ProjectCards (
    "code/images/my-little-cults/my-little-cults-thumbnail.png", 
    "My Little Cults", 
    "Fun game that I dont feel like wrighting a description for right now",
    "my-little-cults")

cards.push(myLittleCultsCard)


//My little cults card
const monsterMash = new ProjectCards (
    "code/images/monster-mash/monster-mash-thumbnail.png", 
    "Monster Mash", 
    "Classrom maneging website for keeping track of student points, with pavlovian feadbck to encurage students ",
    "monster-mash")


cards.push(monsterMash)



export default cards
