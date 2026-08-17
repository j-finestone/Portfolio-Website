//descriptions (put here for readability)
const descriptions = {

    balloonScape: `
        <p>Balloon-Scape is a 2D, open world adventure game. Find the four hot-airballoons in a land packed with quests, unique enemies, and diverse biomes.\n
        At fifteen, game development fascinated me. I created a Balloon-Scape to learn to code, 
        and build something real to show to family and friends.</p>
        <h4>What I Built</h4>
        <p>Balloon-Scape was developed in the GameMaker studio. It was a large-scale project, ending up with over 3,700 lines of code. The final project ended up containing a pop-in system to manage performance, and keep enemies to their assigned regions. Pausing was implemented through taking a screenshot, deactivating all the instances and using the photo as a background for the menus. Enemies featured a path finding algorithm, and states for wandering, chasing the player, getting hit, and charging up projectiles. I built all the art for this project.</p>
        <h4>Lessons</h4>
        <p>This project taught me how to code, manage large scale projects, data structures, pathfinding, UI design, art, and game development.</p>
        <h4>Tech Stack</h4> GameMaker Language, Hosted on Itch.io 

        
    
    
    
    
    
    `



}









const projectData = {
    // Balloon-scape
    balloonScape: {
        id: "balloon-scape",
        title: "Balloon-scape",
        description: descriptions.balloonScape,
        images: ["code/images/balloon-scape/balloon-scape-thumbnail.png", 
            "code/images/balloon-scape/balloon-scape-thumbnail.png",
            "code/images/balloon-scape/balloon-scape-thumbnail.png",
            "code/images/balloon-scape/balloon-scape-thumbnail.png"
        ]
    },

    // Anki Cards
    ankiCards: {
        id: "anki-deck",
        title: "Anki Cards",
        description: "Description for Anki Cards page. unujnruigbtjr jdsijiv easIfm rfnujt ednjeti refimiwjejf jifijfwi erfjrfjifrj",
        images: []
    },

    // My Little Cults
    myLittleCults: {
        id: "my-little-cults",
        title: "My Little Cults",
        description: "Description for My Little Cults page. unujnruigbtjr jdsijiv easIfm rfnujt ednjeti refimiwjejf jifijfwi erfjrfjifrj",
        images: []
    },

    // Monster Mash
    monsterMash: {
        id: "monster-mash",
        title: "Monster Mash",
        description: "Description for Monster Mash page. unujnruigbtjr jdsijiv easIfm rfnujt ednjeti refimiwjejf jifijfwi erfjrfjifrj",
        images: []
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