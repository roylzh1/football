import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalyzers } from "./analyzers/WinsAnalyzers";
import { Summary } from "./Summary";
import { htmlReport } from "./reportTargets/htmlReport";

const reader = new MatchReader("football.csv");
reader.read();
const summary = new Summary(
    new WinsAnalyzers('Man United'),
    new htmlReport()
);
summary.buildAndPrintReport(reader.data);

