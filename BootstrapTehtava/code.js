//Koodi painikkeelle, joka näyttää infotekstin painaessaan ja piilottaa kun painaa toisen
let button1 = document.getElementById("button1");
let infoRev = document.querySelector(".infoRev");
button1.addEventListener("click", revealInfo)

function revealInfo() {
    if (infoRev.style.display == "block") {
        infoRev.style.display = "none";
        button1.innerHTML = "Yleistä tietoa Magic: the Gatheringista";
    } else {
        infoRev.style.display = "block";
        button1.innerHTML = "Piilota";
    }

}