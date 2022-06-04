import { CsvFileReader } from "./CsvFileReader";
import { matchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import {MatchData} from "./MatchData"
export class MatchReader extends CsvFileReader<MatchData>{
    mapRow(row: string[]): any{
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult,
            row[6]
        ]
    }
}