"use strict";
/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("./crud");
function main() {
    (0, crud_1.insertRow)({ name: 'Test' });
    (0, crud_1.deleteRow)(1);
    (0, crud_1.updateRow)(1, { name: 'Updated' });
}
main();
// Creating an object with type RowElement
const row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
// Inserting the row and getting a newRowID
const newRowID = CRUD.insertRow(row);
console.log('Insert row', row);
// Updating the row with additional data
const updatedRow = Object.assign(Object.assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);
// Deleting the row
CRUD.deleteRow(newRowID);
console.log('Delete row id', newRowID);
