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

    else if(message.toLowerCase() === "quien eres"){
    response = "Soy JARVIS, tu asistente virtual.";
    }

    else if(message.toLowerCase() === "abre github"){
    response = "Abriendo GitHub...";
    window.open("https://github.com","_blank");
    }

    else if(message.toLowerCase() === "abre youtube"){
    response = "Abriendo YouTube...";
    window.open("https://youtube.com","_blank");
    }

    else if(message.toLowerCase() === "adios"){
    response = "Hasta luego Junior.";
    }

    else if(message.toLowerCase() === "como estas"){
    response = "Muy bien Junior.";
    }

    chat.innerHTML += `
        <div class="jarvis">
            ${response}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
document.getElementById("userInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});