const projectData = {
    // Balloon-scape
    balloonScape: {
        id: "balloon-scape",
        title: "Balloon-scape",
        description: "Fun video game with jrigjif rfjwrfje ewifjif feirfmpfw eas fjspi  tjgi  gbcfmk vikms afkc",
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