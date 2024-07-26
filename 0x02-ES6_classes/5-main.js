import Building from './5-building.js';

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "Evacuation warning message from TestBuilding";
  }
}

try {
    const testBuilding = new TestBuilding(200);
    console.log(testBuilding);
    console.log(testBuilding.evacuationWarningMessage());
} catch (err) {
    console.log(err);
}