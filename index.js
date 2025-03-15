function startChaos() {
    setInterval(fakeFormat, 500); // Ahora se ejecuta cada 0.5s
    setInterval(playSounds, 3000); // Sonido cada 3s
    setInterval(changeWallpaper, 2000); // Cambio de fondo cada 2s
    setInterval(invertMouse, 100); // Movimiento del mouse rápido pero visible
    setInterval(spamNotepad, 4000); // Spam de texto cada 4s
    setInterval(glitchText, 500); // Efecto glitch cada 0.5s
    setInterval(flashScreen, 500); // Parpadeo cada 0.5s
    setTimeout(finalMessage, 15000); // Mensaje final después de 15s
}

function fakeFormat() {
    let formatWindow = window.open("", "", "width=400,height=200");
    formatWindow.document.write("<body style='background:black; color:red; font-size:20px; text-align:center;'>");
    formatWindow.document.write("<p>Formateando disco C:... " + Math.floor(Math.random() * 100) + "%...</p>");
}

function playSounds() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            let audio = new Audio("https://www.myinstants.com/media/sounds/error.mp3"); // Sonido de error
            audio.play();
        }, i * 5000); // Reproduce cada 5s hasta 30 veces
    }
}

function changeWallpaper() {
    let images = [
        "https://i.imgur.com/Oe4Pp9R.jpeg",
        "https://i.imgur.com/UJpmFO4.png",
        "https://i.imgur.com/FYcXkzl.jpeg"
    ];
    document.body.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)]}')`;
    document.body.style.backgroundSize = "cover";
}

function invertMouse() {
    document.addEventListener("mousemove", (event) => {
        window.scrollBy(-event.movementX * 5, -event.movementY * 5);
    });
}

function spamNotepad() {
    let spamWindow = window.open("", "", "width=400,height=400");
    let text = "";
    for (let i = 0; i < 700; i++) {
        text += "SYNTAX:error ";
    }
    for (let i = 0; i < 700; i++) {
        text += "so ";
    }
    spamWindow.document.write("<body style='background:white; color:black; font-size:16px;'><p>" + text + "</p></body>");
}

function glitchText() {
    let text = document.body.innerHTML;
    document.body.innerHTML = text.split("").sort(() => Math.random() - 0.5).join("");
}

function flashScreen() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "red" : "black";
}

function finalMessage() {
    let errorWindow = window.open("", "", "width=600,height=400");
    errorWindow.document.write("<body style='background:black; color:red; text-align:center;'>");
    errorWindow.document.write("<h1>SYNTAX ERROR</h1>");
    let text = "";
    for (let i = 0; i < 1000; i++) {
        text += "??? ";
    }
    errorWindow.document.write("<p style='font-size:20px;'>" + text + "</p>");
    errorWindow.document.write("<img src='https://i.imgur.com/UJpmFO4.png' width='400'>");
}
