import { MESSAGES } from "./messages";

interface GameInterface {
    userMove:any,
    userPoints:number,
    botMove:any,
    botPoints:number
    running:boolean
} 

export class Game implements GameInterface {
    userMove:any;
    userPoints = 0
    botMove:any;
    botPoints = 0
    running = false 

    constructor(userMove:any,userPoints:number,botMove:any,botPoints:number,running:boolean){
        this.userMove = userMove
        this.userPoints = userPoints
        this.botMove = botMove
        this.botPoints = botPoints
        this.running = running
    }

    move(data:number){ //Number -> Symbol
        return symbols[data]
    }

    getResult(){
        let question:boolean = (this.userMove == symbols.PIEDRA && this.botMove == symbols.TIJERA) ||
        (this.userMove == symbols.PAPEL && this.botMove == symbols.PIEDRA) ||
        (this.userMove == symbols.TIJERA && this.botMove == symbols.PAPEL)
        
        if(question) { this.userPoints +=1 ; return MESSAGES.win } // Victoria, jugador suma punto
        else if (this.userMove == this.botMove) return MESSAGES.equal // Empate
        else { this.botPoints +=1 ; return MESSAGES.lose } // Derrota, bot suma punto
    }

    startGame(){
        this.running = true
    }

    endGame(){
        this.running = false
    }

} 

export enum symbols  {
    "PIEDRA"=1,
    "PAPEL",
    "TIJERA"
}
