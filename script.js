// define elements (the button and img) as variables
let danceButton = document.getElementById("dance-button");
let gif = document.getElementById("gif");

// function that changes gif
function dance() {
    // changes img's source gif
    gif.setAttribute("src", "images/kittydance.gif");
    danceButton.innerHTML = "party time!";
}

// if the button is clicked the function fires
danceButton.addEventListener("click", dance);
