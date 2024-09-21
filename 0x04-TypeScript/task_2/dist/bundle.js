/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffe break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// createEmployee function
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Type predicate function to check if an employee is a Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Function to teach class based on the subject
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    else {
        return 'Invalid subject';
    }
}
// Test the function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Previous test cases
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
// New test cases
console.log(teachClass('Math'));
console.log(teachClass('History'));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNwRUEsaUJBQWlCO0FBQ2pCO0lBQUE7SUFZQSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVELGdCQUFnQjtBQUNoQjtJQUFBO0lBWUEsQ0FBQztJQVhDLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFFRCwwQkFBMEI7QUFDMUIsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDM0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM1QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDeEI7U0FBTTtRQUNILE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN6QjtBQUNMLENBQUM7QUFFRCxnRUFBZ0U7QUFDaEUsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsa0RBQWtEO0FBQ2xELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQy9DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDckM7U0FBTTtRQUNMLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDcEM7QUFDSCxDQUFDO0FBS0QsK0NBQStDO0FBQy9DLFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQ3RDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsQ0FBQztLQUN4QjtTQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUNuQyxPQUFPLGtCQUFrQixDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLGlCQUFpQjtLQUN6QjtBQUNILENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFcEMsc0JBQXNCO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUvQyxpQkFBaUI7QUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIERpcmVjdG9ySW50ZXJmYWNlXHJcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBUZWFjaGVySW50ZXJmYWNlXHJcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gRGlyZWN0b3IgY2xhc3NcclxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xyXG4gIH0gXHJcblxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlIGJyZWFrJztcclxuICB9XHJcblxyXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZWFjaGVyIGNsYXNzXHJcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcclxuICB9XHJcblxyXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gY3JlYXRlRW1wbG95ZWUgZnVuY3Rpb25cclxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFR5cGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGFuIGVtcGxveWVlIGlzIGEgRGlyZWN0b3JcclxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogVGVhY2hlciB8IERpcmVjdG9yKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xyXG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd29yayBiYXNlZCBvbiBlbXBsb3llZSB0eXBlXHJcbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBzdHJpbmcge1xyXG4gIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xyXG4gICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdHJpbmcgTGl0ZXJhbCB0eXBlIGZvciBTdWJqZWN0c1xyXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gdGVhY2ggY2xhc3MgYmFzZWQgb24gdGhlIHN1YmplY3RcclxuZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XHJcbiAgaWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xyXG4gICAgcmV0dXJuICdUZWFjaGluZyBNYXRoJztcclxuICB9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09ICdIaXN0b3J5Jykge1xyXG4gICAgcmV0dXJuICdUZWFjaGluZyBIaXN0b3J5JztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICdJbnZhbGlkIHN1YmplY3QnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZXN0IHRoZSBmdW5jdGlvblxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTtcclxuXHJcbi8vIFByZXZpb3VzIHRlc3QgY2FzZXNcclxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpO1xyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpO1xyXG5cclxuLy8gTmV3IHRlc3QgY2FzZXNcclxuY29uc29sZS5sb2codGVhY2hDbGFzcygnTWF0aCcpKTtcclxuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTsiXSwic291cmNlUm9vdCI6IiJ9