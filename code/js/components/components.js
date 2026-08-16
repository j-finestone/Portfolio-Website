fetch("code/js/components/header.html")
    .then(response=>response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

fetch("code/js/components/footer.html")
    .then(response=>response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });