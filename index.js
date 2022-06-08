function aleatorio (min, max) {
   return Math.floor(Math.random() * (max - min + 1) - min);
}
const aleatory = aleatorio(1, 100);
const nombre = prompt('Bienvenido al pinche juego "Adivina el numero" Ingresa tu nombre mi estimado');
let intentos = 0;
let numero;
for (let i = 0; i < 5; intentos++ ) {
     numero = parseInt(prompt ('ingresa tu numero de la suerte mi estimado'));
    if(numero > aleatory){
        alert('el numero que te hara ganar es menor al que ingresaste')
    } else if (numero < aleatory) {
        alert ('el numero que te hara ganar es mayor al que ingresaste mamoncito')
    } else {
        break;
    }
    
}
if(numero == aleatory) {
    alert(`Eres un pinche crack, acabas de adivinar el numero en ${intentos + 1} intentos`)
} else {
    alert(`Lo siento crack agotaste tus intentos, suerte para la proxima!`)
}
