import { Messages } from "./messages"
import { interf } from "../main"
import { Game } from "./class"

export function mainScreen (){
    //Pantalla menú
    Messages.clear()

    interf.question(Messages.menu,(res:string)=>{
        res = res.trim()
        if(res == '1') PLAY() //Empezar a jugar
        else if(res == '2') interf.close() //Mostrar reglas
        else if (res == '3') { interf.close();console.log(Messages.gameover) } //Salir 
        else mainScreen() //Evitar errores
    })
}

function PLAY(){
    let GAME = new Game(0,0,0,0,true)
    Messages.clear()
    console.log(Messages.gamestart)
    GAME.startGame()

    while(GAME.running == true){
        interf.question(Messages.select,(res:any,)=>{
            res = parseInt(res.trim())
            
            if(isNaN(res)|| res < 1 || res > 3){
                console.log(Messages.error)
                interf.close()
            }else{
                GAME.userMove = res
                GAME.botMove = randomGenerator()
                
                console.log(GAME.move(GAME.userMove))
                console.log(GAME.move(GAME.botMove))
                
                console.log(GAME.getResult())
                GAME.endGame
            }
        })
        console.log("Estamos de vuelta!")
    }
}

function randomGenerator ():number {
    let random = Math.floor(Math.random()*3)+1
    return random
}

function readCommands (){
    //Leer comandos de salir continuar o algo asi
} 
