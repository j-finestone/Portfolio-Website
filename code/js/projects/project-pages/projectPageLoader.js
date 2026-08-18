import projectData from "./projectPageData.js"
document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const project = projectData.getDataFromId(id)

    if (project) {
        //add title and discription element to page
        document.getElementById("title").innerHTML = project.title;
        document.getElementById("description").innerHTML = project.description;

        //Add access links
        const accessLinksWrapper = document.getElementById("access-links-wrapper");

        //only add access links if the project has them
        if (Object.hasOwn(project, "accessLinks")) {
            if ( (Object.keys(project.accessLinks).length) > 0) {
                document.getElementById("access-links-header").innerHTML = "<h4>Access Links</h4>"

                //Add actual links
                var linksHTML = "";
                for (const link of Object.keys(project.accessLinks)) {
                    linksHTML += `<a href=${project.accessLinks[link].link}>${project.accessLinks[link].title}</a>\n`

                }
                document.getElementById("access-links-container").innerHTML = linksHTML;
            }
        }




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

