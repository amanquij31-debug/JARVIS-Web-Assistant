function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if(message === "") return;

    let chat = document.getElementById("chat");

    chat.innerHTML += `
        <div class="user">
            ${message}
        </div>
    `;

    let response = "No entiendo ese comando.";

    if(message.toLowerCase() === "hola"){
        response = "Hola Junior.";
    }

    else if(message.toLowerCase() === "hora"){
        response = new Date().toLocaleTimeString();
    }

    else if(message.toLowerCase() === "fecha"){
        response = new Date().toLocaleDateString();
    }

    else if(message.toLowerCase() === "abre google"){
        response = "Abriendo Google...";
        window.open("https://www.google.com","_blank");
    }

    chat.innerHTML += `
        <div class="jarvis">
            ${response}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}