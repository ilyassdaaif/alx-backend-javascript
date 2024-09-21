// main.ts
const { insertRow, deleteRow, updateRow } = require('./crud');

interface Row {
    firstName: string;
    lastName: string;
}

interface RowID extends Number { }

const row: Row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = insertRow(row);

const updatedRow: Row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

updateRow(newRowID, updatedRow);
deleteRow(newRowID);