import cards from "./projectCards.js"
document.addEventListener("DOMContentLoaded", () => {
    //Add cards to html list
    //Loop through every card
    const grid = document.getElementById("main-projects-grid")
    for (var i=0; i<cards.length; i++) {
        const card = document.createElement("button")
        card.className = "card";
        card.a


        card.innerHTML = `
        <!--place older cards--> 
        <section class="card-thumbnail-wrap">
            <img class="card-thumbnail" src="` + cards[i].thumbnail+ ` "alt=". `+ cards[i].header + ` project thumbnail" width="100%"> 
        </section>   
        <section class="card-description">
            <h3>`+cards[i].header+`</h3>
            <p>`+cards[i].description+`</p>
        </section`;

        const id = cards[i].id
        //Add event listener to card
        card.addEventListener("click", () => {
            window.location.href = `projectPage.html?id=`+ id;

    });

  //Add it to the grid 
  grid.appendChild(card);
}

    


});




//Project cards data

