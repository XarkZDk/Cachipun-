import { MESSAGES } from "./messages"
import { Game } from "./class"
import * as readlineSync from "readline-sync"
import * as fs from "fs"

const FOLDER:string = 'Score' 
const GAME_FILE:string = `gamesCompilation`

export function mainScreen (){ //Pantalla menú
    while(true){
        MESSAGES.clear()
        let res = readlineSync.questionInt(MESSAGES.menu)
        if(res == 1) play() //Empezar a jugar
        else if(res == 2) rules() //Mostrar reglas
        else if(res == 3) scores() //Mostrar los puntajes de partidas anteriores
        else if (res == 4) { //Salir
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
            
        if(isNaN(res)|| res < 1 || res > 4) console.log(MESSAGES.error)
        else{
            game.userMove = res
            game.botMove = randomGenerator()
            
            console.log(`\nEl jugador utilizo: ${game.move(game.userMove)}`)
            console.log(`El bot utilizo: ${game.move(game.botMove)}`)
            
            console.log("\n",game.getResult())
            
            
        }
        
        let points:string = `User: ${game.userPoints}
Bot: ${game.botPoints}\n\n`

        console.log(points)
        
        let continueP:string = readlineSync.question(MESSAGES.continue).toLowerCase()
        
        if(continueP != 'y') {
            saveGame(points) //Guardamos la partida
            game.endGame()
            MESSAGES.clear()
        }else{
            MESSAGES.clear()
        }
    }

    function saveGame (points:string) :void {
    
        if(!fs.existsSync(FOLDER)){ //Si no exist la carpeta, la creamos
            fs.mkdirSync(FOLDER) 
        }
    
        if(!fs.existsSync(`./${FOLDER}/${GAME_FILE}`)){ //Si no existe el archivo, lo creamos y se guarda la partida
            fs.writeFileSync(`./${FOLDER}/${GAME_FILE}`,points) 
        }
        else { 
            fs.appendFileSync(`./${FOLDER}/${GAME_FILE}`,points) //guardar partida
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

function scores (){
    while(true){
        MESSAGES.clear()

        if(fs.existsSync(`./${FOLDER}/${GAME_FILE}`)) console.log(fs.readFileSync(`./${FOLDER}/${GAME_FILE}`,"utf-8"))
        else console.log(MESSAGES.noFile)
        

        let exit = readlineSync.question(MESSAGES.continue_reading)
        exit = exit.toLowerCase()
        if(exit == 'y') break
    }
}

function randomGenerator ():number {
    let random = Math.floor(Math.random()*3)+1
    return random
}    
