"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzers = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalyzers {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let Wins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.matchResult.HomeWin) {
                Wins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.matchResult.AwayWin) {
                Wins++;
            }
        }
        return (`Team ${this.team} win ${Wins} games`);
    }
}
exports.WinsAnalyzers = WinsAnalyzers;
