"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbols = exports.Game = void 0;
var messages_1 = require("./messages");
var Game = /** @class */ (function () {
    function Game(userMove, userPoints, botMove, botPoints, running) {
        this.userPoints = 0;
        this.botPoints = 0;
        this.running = false;
        this.userMove = userMove;
        this.userPoints = userPoints;
        this.botMove = botMove;
        this.botPoints = botPoints;
        this.running = running;
    }
    Game.prototype.move = function (data) {
        return symbols[data];
    };
    Game.prototype.getResult = function () {
        var question = (this.userMove == symbols.PIEDRA && this.botMove == symbols.TIJERA) ||
            (this.userMove == symbols.PAPEL && this.botMove == symbols.PIEDRA) ||
            (this.userMove == symbols.TIJERA && this.botMove == symbols.PAPEL);
        if (question) {
            this.addPoints(this.userPoints);
            return messages_1.Messages.win;
        } // Victoria
        else if (this.userMove == this.botMove)
            return messages_1.Messages.equal; // Empate
        else {
            this.addPoints(this.botPoints);
            return messages_1.Messages.lose;
        } // Derrota
    };
    Game.prototype.addPoints = function (mark) {
        mark++;
    };
    Game.prototype.startGame = function () {
        this.running = true;
    };
    Game.prototype.endGame = function () {
        this.running = false;
    };
    return Game;
}());
exports.Game = Game;
var symbols;
(function (symbols) {
    symbols[symbols["PIEDRA"] = 1] = "PIEDRA";
    symbols[symbols["PAPEL"] = 2] = "PAPEL";
    symbols[symbols["TIJERA"] = 3] = "TIJERA";
})(symbols = exports.symbols || (exports.symbols = {}));
