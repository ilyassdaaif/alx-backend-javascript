/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import { insertRow, deleteRow, updateRow } from './crud';

function main() {
  insertRow({ name: 'Test' });
  deleteRow(1);
  updateRow(1, { name: 'Updated' });
}

main();

// Creating an object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Inserting the row and getting a newRowID
const newRowID: RowID = CRUD.insertRow(row);
console.log('Insert row', row);

// Updating the row with additional data
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

// Deleting the row
CRUD.deleteRow(newRowID);
console.log('Delete row id', newRowID);