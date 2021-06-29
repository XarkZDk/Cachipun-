"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainScreen = void 0;
var messages_1 = require("./messages");
var main_1 = require("../main");
var class_1 = require("./class");
function mainScreen() {
    //Pantalla menú
    messages_1.Messages.clear();
    main_1.interf.question(messages_1.Messages.menu, function (res) {
        res = res.trim();
        if (res == '1')
            PLAY(); //Empezar a jugar
        else if (res == '2')
            main_1.interf.close(); //Mostrar reglas
        else if (res == '3') {
            main_1.interf.close();
            console.log(messages_1.Messages.gameover);
        } //Salir 
        else
            mainScreen(); //Evitar errores
    });
}
exports.mainScreen = mainScreen;
function PLAY() {
    var GAME = new class_1.Game(0, 0, 0, 0, true);
    messages_1.Messages.clear();
    console.log(messages_1.Messages.gamestart);
    GAME.startGame();
    while (GAME.running == true) {
        main_1.interf.question(messages_1.Messages.select, function (res) {
            res = parseInt(res.trim());
            if (isNaN(res) || res < 1 || res > 3) {
                console.log(messages_1.Messages.error);
                main_1.interf.close();
            }
            else {
                GAME.userMove = res;
                GAME.botMove = randomGenerator();
                console.log(GAME.move(GAME.userMove));
                console.log(GAME.move(GAME.botMove));
                console.log(GAME.getResult());
                GAME.endGame;
            }
        });
        console.log("Estamos de vuelta!");
    }
}
function randomGenerator() {
    var random = Math.floor(Math.random() * 3) + 1;
    return random;
}
function readCommands() {
    //Leer comandos de salir continuar o algo asi
}
