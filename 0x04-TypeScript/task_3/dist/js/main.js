"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const crud_1 = require("./crud");
const row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
const newRowID = (0, crud_1.insertRow)(row);
const updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
(0, crud_1.updateRow)(newRowID, updatedRow);
(0, crud_1.deleteRow)(newRowID);
