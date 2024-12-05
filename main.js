// Definir a data da formatura
const formaturaData = new Date("December 20, 2024 20:00:00").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = formaturaData - now;

    // Calcular dias, horas, minutos e segundos restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir o resultado no elemento com o ID "countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Quando a contagem regressiva terminar, exibir uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "A formatura chegou!";
    }
}, 1000);

// Função para confirmar presença
function confirmarPresenca() {
    alert("Obrigado por confirmar sua presença! Nos vemos lá.");
}
