let timer;
let isFocusing = true;
// Função para atualizar o relógio
function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();

    // Adiciona um zero à esquerda se for menor que 10
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Atualiza os elementos HTML com a hora e minutos
    document.getElementById("hour").innerHTML = "<h1>" + hour + "</h1>";
    document.getElementById("minutes").innerHTML = "<h1>" + minutes + "</h1>";

    // Altera o fundo de acordo com o horário do dia
    var body = document.querySelector("body");
    if (hour >= 6 && hour < 11) {
        body.style.backgroundImage = "url('./img/manhã.png')";
    } else if (hour >= 11 && hour < 16) {
        body.style.backgroundImage = "url('./img/meiodia.png')";
    } else if (hour >= 16 && hour < 19) {
        body.style.backgroundImage = "url('./img/finaldatarde.png')";
    } else {
        body.style.backgroundImage = "url('./img/noite.png')";
    }
}

// Chama a função updateClock a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez no início para que a imagem de fundo seja definida corretamente
updateClock();

