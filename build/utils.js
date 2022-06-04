"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const dataParts = date.split("/").map((item) => {
        return parseInt(item);
    });
    // 28/10/2018
    return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
exports.dateStringToDate = dateStringToDate;
