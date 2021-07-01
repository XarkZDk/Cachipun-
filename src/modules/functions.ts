import { MESSAGES } from "./messages"
import { Game } from "./class"
import * as readlineSync from "readline-sync"

export function mainScreen (){ //Pantalla menú
    while(true){
        MESSAGES.clear()
        let res = readlineSync.questionInt(MESSAGES.menu)
        if(res == 1) play() //Empezar a jugar
        else if(res == 2) rules() //Mostrar reglas
        else if (res == 3) { //Salir
            console.log(MESSAGES.gameover)
            break
        } 
    }
}

function play(){
    let game = new Game(0,0,0,0,true)
    MESSAGES.clear()
    console.log(MESSAGES.gamestart)
    game.startGame()

    while(game.running){
        let res = readlineSync.questionInt(MESSAGES.select)
            
        if(isNaN(res)|| res < 1 || res > 3) console.log(MESSAGES.error)
        else{
            game.userMove = res
            game.botMove = randomGenerator()
            
            console.log(`\nEl jugador utilizo: ${game.move(game.userMove)}`)
            console.log(`El bot utilizo: ${game.move(game.botMove)}`)
            
            console.log("\n",game.getResult())
            
            console.log(`User: ${game.userPoints}
Bot: ${game.botPoints}`)
        }
        let continueP = readlineSync.question(MESSAGES.continue)
        continueP.toLowerCase
        console.log(continueP)
        if(continueP != 'y') {
            game.endGame()
            MESSAGES.clear()
        }else{
            MESSAGES.clear()
        }
    }
}

function rules (){
    while(true){
        MESSAGES.clear()
        console.log(MESSAGES.rules)
        let exit = readlineSync.question(MESSAGES.continue_reading)
        exit = exit.toLowerCase()
        if(exit == 'y') break
    }
}

function randomGenerator ():number {
    let random = Math.floor(Math.random()*3)+1
    return random
}    

