import projectData from "./projectPageData.js"
document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const project = projectData.getDataFromId(id)

    if (project) {
        //add title and discription element to page
        document.getElementById("title").innerHTML = project.title;
        document.getElementById("description").textContent = project.description;


        //add new html elements in image section,
        const imageSection = document.getElementById("example-images");
        project.images.forEach(imageSource => {
            const imageElement = document.createElement("img");

            imageElement.setAttribute("class", "example-image");
            imageElement.setAttribute("src", imageSource);

            //attactch it to images section
            imageSection.appendChild(imageElement)
        })
        
    }

});

