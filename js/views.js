const namespace = "luis-portafolio";
const key = "home";

fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("visitCount").textContent = data.value;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("visitCount").textContent = "--";
    });