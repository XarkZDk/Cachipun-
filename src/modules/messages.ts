
export const MESSAGES = {
    error:"===== ERROR! =====\n",
    equal:"===== Empate! =====\n",
    win:"===== Ganaste! =====\n",
    lose:"===== Perdiste! =====\n",
    select:'Elige tu movimiento:\n| 1 Piedra | 2 Papel | 3 Tijeras |\n',
    continue_reading:"\nQuieres dejar de leer? (y): ",
    continue:"\nQuieres continuar? (y/n): ",
    gameover:"\n                  ===== Fin del juego =====\n\n",
    gamestart:"\n                  ===== Iniciando el juego! =====\n\n",
    menu:`
                    ==============================
                        Piedra Papel o Tijeras
                    ==============================
                     Elige una opcion:
                     1 Jugar
                     2 Reglas
                     3 Salir\n
`,
    rules:`
                    ==============================
                               REGLAS
                    ==============================

                       Piedra le gana a Tijeras
                       Tijeras le gana a Papel
                       Papel le gana a Piedra\n
                    `,


    clear(){
        console.clear()
    },
}
