import tables from "./table.js";
//descriptions (put here for readability)
const descriptions = {

    balloonScape: `
        <h4>Overview</h4>
        <p>Balloon-Scape is a 2D, open world adventure game. Find the four hot-airballoons in a land packed with quests, unique enemies, and diverse biomes.\n
        At fifteen, game development fascinated me. I created a Balloon-Scape to learn to code, 
        and build something real to show to family and friends.</p>
        <h4>What I Built</h4>
        <p>Balloon-Scape was developed in the GameMaker studio. It was a large-scale project, ending up with over 3,700 lines of code. The final project ended up containing a pop-in system to manage performance, and keep enemies to their assigned regions. Pausing was implemented through taking a screenshot, deactivating all the instances and using the photo as a background for the menus. Enemies featured a path finding algorithm, and states for wandering, chasing the player, getting hit, and charging up projectiles. I built all the art for this project.</p>
        <h4>Lessons</h4>
        <p>This project taught me how to code, manage large scale projects, data structures, pathfinding, UI design, art, and game development.</p>
        <h4>Tech Stack</h4> GameMaker Language, Hosted on Itch.io`,
    ankiCards: `
        <h4>Overview</h4>
        <p>The Anki Deck Creator project is a series of scripts that generates Mandarin Chinese flashcards</p>
        <p>After deciding to study Mandarin Chinese, I noticed that there weren’t any Anki decks or data sets that contained everything I wanted out of vocabulary flashcards. Namely: a deck ordered based strictly on a frequency list rather than the HSK, example sentences according to Krashen’s i+1 principle, notes flagging the nuances of the harder-to-translate words, pronunciation guides, and a breakdown of the characters making up a word. Because of this, I decided to make my own deck.</p>

        <h4>What I built</h4>
        <p>This project takes in a pregenerated frequency list, and uses the Chat GPT API to generate translations, example sentences for each word. Additionally, it adds pinyin (pronunciation guides) to the card using pypinyin, and a breakdown of the components of the Chinese characters using the Make Me a Hanzi Dataset. Cards were generated asynchronously in batches to speed up generation. Attatched to the final commit is a csv and apkg file of 4,000+ cards pregenerated.</p>

        <h4>Lessons</h4>

        <p>This project taught me about working with and creating large data sets, batch processing, file/data types and communicating with APIs.</p>

        <h4>Tech Stack</h4>
        <p>hyperTTS, Genanki, pandas, pypinyin, Python</p>

        <h4>Example data set</h4>
        ${tables.ankiTable}
        `,
    myLittleCults: `
        <h4>Overview</h4>
        <p>My Little Cults is a fast paced, action game developed for the two-week, Gamedev.js Jam 2025 game jam based on the theme “balance”. The game features two parallel worlds, each with a group of cult members. The goal is to keep the cult member populations the same, while hazards like poisonous flowers, changelings, and a kraken constantly offset that balance. The project ranked twenty-six out of 408</p>

        <h4>What I built</h4>
        <p>My Little Cults was developed in unity. I worked as a programmer in a group of four. The main challenges were getting the cult member npc, and environment behaviors to be natural and dynamic, while also interacting with one another. We used a state machine to determine the cult member behaviors, and had hazards spawn on a timer.</p>

        <h4>Lessons</h4>
        <p>This project gave me experience in C#, and working with groups on a shared project using githubl. It also served as a heavy exercise in working under strict time constraints.</p>

        <h4>Tech Stack</h4>
        <p>Unity (C#), Spine (2D skeletal animation), NavMesh Plus (2D pathfinding), URP, Post Processing Stack
    `,
    monsterMash: `
        <h4>Overview</h4>
        <p>Monster Mash is a custom made class points Website.</p>

        <p>My mother, who was a teacher, needed a way to keep track of her students’ points. She requested a monster themed, Class-Dojo inspired website, with simple UI, gamification and sensory feedback features to encourage students to gain points.</p>

        <h4>What I built</h4>
        <p>Monster Mash features the ability to make profiles with a monster image for each student, a button for choosing a random student, and the ability to give points to students individually or in bulk, and sensory feedback like sound effects, confetti, and card animations. It used Firebase to store data on the cloud.</p>

        <h4>Lessons</h4>
        <p>Developing Monster Mash gave me experience in web development, working with cloud storage, libraries, and hosting API’s.</p>
        <h4>Tech Stach</h>
        <p>HTML, CSS, JaveScript, </p>`

    
    
}







const projectData = {
    // Balloon-scape
    balloonScape: {
        id: "balloon-scape",
        title: "Balloon-scape",
        description: descriptions.balloonScape,
        images: [
            "code/images/balloon-scape/balloon-scape-thumbnail.png", 
            "code/images/balloon-scape/balloon-image.png",
            "code/images/balloon-scape/desert-lake.png",
            "code/images/balloon-scape/winter-biome.png"
        ],
        accessLinks: {
            gamePage: {
                title: "Play Game",
                link: "https://jordanfeinstein.itch.io/balloon-scape"
            },
            github: {
                title: "GitHub",
                link: "https://github.com/j-finestone/Balloon-Scape"
            }
        }
    },

    // Anki Cards
    ankiCards: {
        id: "anki-deck",
        title: "Anki Deck Generator",
        description: descriptions.ankiCards,
        images: [],
        accessLinks: {
            github: {
                title: "GitHub",
                link: "https://github.com/j-finestone/Anki-Deck-Creator/"
            }
        }
    },

    // My Little Cults
    myLittleCults: {
        id: "my-little-cults",
        title: "My Little Cults",
        description: descriptions.myLittleCults,
        images: [
            "code/images/my-little-cults/mlc-thumbnail.png",
            "code/images/my-little-cults/mlc-gameplay.png",
            "code/images/my-little-cults/mlc-overworld.png",
            "code/images/my-little-cults/mlc-other-world.png",
            
        ],
        accessLinks: {
            gamePage: {
                title: "Play Game",
                link: "https://kwabs-545.itch.io/my-little-cults"
            }
        }

    },

    // Monster Mash
    monsterMash: {
        id: "monster-mash",
        title: "Monster Mash",
        description: descriptions.monsterMash,
        images: [
            "code/images/monster-mash/monster-mash-thumbnail.png",
            "code/images/monster-mash/mm-confetti.png",
            "code/images/monster-mash/mm-modal.png",
            "code/images/monster-mash/mm-add-student.png",
            
        ],
        
        accessLinks: {
            webpage: {
                title: "Launch Website",
                link: "https://monster-mash-class.web.app/"
            },
            github: {
                title: "Github",
                link: "https://github.com/j-finestone/MonsterMash"
            },
        }
    }
};

//Returns page data when given an ID
function getDataFromId(id) {
    const match = Object.values(projectData).find(item =>item && item.id===id)
    return match

    //if it doesnt find anything
    console.warn("Page data not found for id: "+id)
    return null

}


export default {projectData, getDataFromId};