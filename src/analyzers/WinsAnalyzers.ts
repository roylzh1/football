import { MatchData } from "../MatchData";
import { matchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalyzers implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let Wins = 0;
    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === matchResult.HomeWin) {
        Wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === matchResult.AwayWin
      ) {
        Wins++;
      }
    }

    return (`Team ${this.team} win ${Wins} games`);
  }
}
