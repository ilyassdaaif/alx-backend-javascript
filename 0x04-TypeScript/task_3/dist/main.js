"use strict";
// main.ts
const { insertRow, deleteRow, updateRow } = require('./crud');
const row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
const newRowID = insertRow(row);
const updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
