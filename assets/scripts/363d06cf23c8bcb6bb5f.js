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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n    constructor(hostElementId, insertBefore = false) {\n      if (hostElementId) {\n        this.hostElement = document.getElementById(hostElementId);\n      } else {\n        this.hostElement = document.body;\n      }\n      this.insertBefore = insertBefore;\n    }\n  \n    detach() {\n      if (this.element) {\n        this.element.remove();\n        // this.element.parentElement.removeChild(this.element);\n      }\n    }\n  \n    attach() {\n      this.hostElement.insertAdjacentElement(\n        this.insertBefore ? 'afterbegin' : 'beforeend',\n        this.element\n      );\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50LmpzP2VmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoaG9zdEVsZW1lbnRJZCwgaW5zZXJ0QmVmb3JlID0gZmFsc2UpIHtcbiAgICAgIGlmIChob3N0RWxlbWVudElkKSB7XG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0RWxlbWVudElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuICAgICAgdGhpcy5pbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmU7XG4gICAgfVxuICBcbiAgICBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGF0dGFjaCgpIHtcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgICB0aGlzLmluc2VydEJlZm9yZSA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLFxuICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/Component.js\n");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ \"./src/App/Tooltip.js\");\n\n\n\nclass ProjectItem {\n    // hasActiveTooltip = false;\n  \n    constructor(id, updateProjectListsFunction, type) {\n      this.id = id;\n      this.hasActiveTooltip = false;\n      this.updateProjectListsHandler = updateProjectListsFunction;\n      this.connectMoreInfoButton();\n      this.connectSwitchButton(type);\n      this.connectDrag();\n    }\n  \n    showMoreInfoHandler() {\n      if (this.hasActiveTooltip) {\n        return;\n      }\n      const projectElement = document.getElementById(this.id);\n      const tooltipText = projectElement.dataset.extraInfo;\n      const tooltip = new _Tooltip__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"](\n        () => {\n          this.hasActiveTooltip = false;\n        },\n        tooltipText,\n        this.id\n      );\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    }\n  \n    connectDrag() {\n      document.getElementById(this.id).addEventListener('dragstart', event => {\n        event.dataTransfer.setData('text/plain', this.id);\n        event.dataTransfer.effectAllowed = 'move';\n      });\n    }\n  \n    connectMoreInfoButton() {\n      const projectItemElement = document.getElementById(this.id);\n      const moreInfoBtn = projectItemElement.querySelector(\n        'button:first-of-type'\n      );\n      moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n    }\n  \n    connectSwitchButton(type) {\n      const projectItemElement = document.getElementById(this.id);\n      let switchBtn = projectItemElement.querySelector('button:last-of-type');\n      switchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n      switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n      switchBtn.addEventListener(\n        'click',\n        this.updateProjectListsHandler.bind(null, this.id)\n      );\n    }\n  \n    update(updateProjectListsFn, type) {\n      this.updateProjectListsHandler = updateProjectListsFn;\n      this.connectSwitchButton(type);\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTUhlbHBlclwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCIuL1Rvb2x0aXBcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtIHtcbiAgICAvLyBoYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gIFxuICAgIGNvbnN0cnVjdG9yKGlkLCB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbiwgdHlwZSkge1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gICAgICB0aGlzLnVwZGF0ZVByb2plY3RMaXN0c0hhbmRsZXIgPSB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbjtcbiAgICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XG4gICAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XG4gICAgICB0aGlzLmNvbm5lY3REcmFnKCk7XG4gICAgfVxuICBcbiAgICBzaG93TW9yZUluZm9IYW5kbGVyKCkge1xuICAgICAgaWYgKHRoaXMuaGFzQWN0aXZlVG9vbHRpcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwVGV4dCxcbiAgICAgICAgdGhpcy5pZFxuICAgICAgKTtcbiAgICAgIHRvb2x0aXAuYXR0YWNoKCk7XG4gICAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgY29ubmVjdERyYWcoKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5pZCk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICBjb25uZWN0TW9yZUluZm9CdXR0b24oKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgIGNvbnN0IG1vcmVJbmZvQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdidXR0b246Zmlyc3Qtb2YtdHlwZSdcbiAgICAgICk7XG4gICAgICBtb3JlSW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIFxuICAgIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xuICAgICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbiAgICAgIHN3aXRjaEJ0biA9IERPTUhlbHBlci5jbGVhckV2ZW50TGlzdGVuZXJzKHN3aXRjaEJ0bik7XG4gICAgICBzd2l0Y2hCdG4udGV4dENvbnRlbnQgPSB0eXBlID09PSAnYWN0aXZlJyA/ICdGaW5pc2gnIDogJ0FjdGl2YXRlJztcbiAgICAgIHN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RMaXN0c0hhbmRsZXIuYmluZChudWxsLCB0aGlzLmlkKVxuICAgICAgKTtcbiAgICB9XG4gIFxuICAgIHVwZGF0ZSh1cGRhdGVQcm9qZWN0TGlzdHNGbiwgdHlwZSkge1xuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XG4gICAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XG4gICAgfVxuICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n\n\nclass ProjectList {\n    // projects = [];\n  \n    constructor(type) {\n      this.type = type;\n      this.projects = [];\n      const prjItems = document.querySelectorAll(`#${type}-projects li`);\n      for (const prjItem of prjItems) {\n        this.projects.push(\n          new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\n        );\n      }\n      console.log(this.projects);\n      this.connectDroppable();\n    }\n  \n    connectDroppable() {\n      const list = document.querySelector(`#${this.type}-projects ul`);\n  \n      list.addEventListener('dragenter', event => {\n        if (event.dataTransfer.types[0] === 'text/plain') {\n          list.parentElement.classList.add('droppable');\n          event.preventDefault();\n        }\n      });\n  \n      list.addEventListener('dragover', event => {\n        if (event.dataTransfer.types[0] === 'text/plain') {\n          event.preventDefault();\n        }\n      });\n  \n      list.addEventListener('dragleave', event => {\n        if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n          list.parentElement.classList.remove('droppable');\n        }\n      });\n  \n      list.addEventListener('drop', event => {\n        const prjId = event.dataTransfer.getData('text/plain');\n        if (this.projects.find(p => p.id === prjId)) {\n          return;\n        }\n        document\n          .getElementById(prjId)\n          .querySelector('button:last-of-type')\n          .click();\n        list.parentElement.classList.remove('droppable');\n        // event.preventDefault(); // not required\n      });\n    }\n  \n    setSwitchHandlerFunction(switchHandlerFunction) {\n      this.switchHandler = switchHandlerFunction;\n    }\n  \n    addProject(project) {\n      this.projects.push(project);\n      _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"DOMHelper\"].moveElement(project.id, `#${this.type}-projects ul`);\n      project.update(this.switchProject.bind(this), this.type);\n    }\n  \n    switchProject(projectId) {\n      // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n      // this.projects.splice(projectIndex, 1);\n      this.switchHandler(this.projects.find(p => p.id === projectId));\n      this.projects = this.projects.filter(p => p.id !== projectId);\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSBcIi4vUHJvamVjdEl0ZW1cIjtcbmltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTUhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3Qge1xuICAgIC8vIHByb2plY3RzID0gW107XG4gIFxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICBjb25zdCBwcmpJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3R5cGV9LXByb2plY3RzIGxpYCk7XG4gICAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgcHJqSXRlbXMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFxuICAgICAgICAgIG5ldyBQcm9qZWN0SXRlbShwcmpJdGVtLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XG4gICAgICB0aGlzLmNvbm5lY3REcm9wcGFibGUoKTtcbiAgICB9XG4gIFxuICAgIGNvbm5lY3REcm9wcGFibGUoKSB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuICBcbiAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xuICAgICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcmpJZCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQocHJqSWQpXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuICAgICAgICAgIC5jbGljaygpO1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIG5vdCByZXF1aXJlZFxuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICBzZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oc3dpdGNoSGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyRnVuY3Rpb247XG4gICAgfVxuICBcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgIERPTUhlbHBlci5tb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuICAgICAgcHJvamVjdC51cGRhdGUodGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XG4gICAgfVxuICBcbiAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgLy8gY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgLy8gdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcbiAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwID0+IHAuaWQgIT09IHByb2plY3RJZCk7XG4gICAgfVxuICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(closeNotifierFunction, text, hostElementId) {\n      super(hostElementId);\n      this.closeNotifier = closeNotifierFunction;\n      this.text = text;\n      this.closeTooltip = () => {\n        this.detach();\n        this.closeNotifier();\n      };\n      this.create();\n    }\n  \n    // closeTooltip = () => {\n    //   this.detach();\n    //   this.closeNotifier();\n    // };\n  \n    create() {\n      const tooltipElement = document.createElement('div');\n      tooltipElement.className = 'card';\n      const tooltipTemplate = document.getElementById('tooltip');\n      const tooltipBody = document.importNode(tooltipTemplate.content, true);\n      tooltipBody.querySelector('p').textContent = this.text;\n      tooltipElement.append(tooltipBody);\n  \n      const hostElPosLeft = this.hostElement.offsetLeft;\n      const hostElPosTop = this.hostElement.offsetTop;\n      const hostElHeight = this.hostElement.clientHeight;\n      const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n  \n      const x = hostElPosLeft + 20;\n      const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n  \n      tooltipElement.style.position = 'absolute';\n      tooltipElement.style.left = x + 'px'; // 500px\n      tooltipElement.style.top = y + 'px';\n  \n      tooltipElement.addEventListener('click', this.closeTooltip);\n      this.element = tooltipElement;\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Rvb2x0aXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Rvb2x0aXAuanM/ZDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihjbG9zZU5vdGlmaWVyRnVuY3Rpb24sIHRleHQsIGhvc3RFbGVtZW50SWQpIHtcbiAgICAgIHN1cGVyKGhvc3RFbGVtZW50SWQpO1xuICAgICAgdGhpcy5jbG9zZU5vdGlmaWVyID0gY2xvc2VOb3RpZmllckZ1bmN0aW9uO1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMuY2xvc2VUb29sdGlwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmNsb3NlTm90aWZpZXIoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cbiAgXG4gICAgLy8gY2xvc2VUb29sdGlwID0gKCkgPT4ge1xuICAgIC8vICAgdGhpcy5kZXRhY2goKTtcbiAgICAvLyAgIHRoaXMuY2xvc2VOb3RpZmllcigpO1xuICAgIC8vIH07XG4gIFxuICAgIGNyZWF0ZSgpIHtcbiAgICAgIGNvbnN0IHRvb2x0aXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b29sdGlwRWxlbWVudC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgICBjb25zdCB0b29sdGlwVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcCcpO1xuICAgICAgY29uc3QgdG9vbHRpcEJvZHkgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvb2x0aXBUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgIHRvb2x0aXBCb2R5LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9IHRoaXMudGV4dDtcbiAgICAgIHRvb2x0aXBFbGVtZW50LmFwcGVuZCh0b29sdGlwQm9keSk7XG4gIFxuICAgICAgY29uc3QgaG9zdEVsUG9zTGVmdCA9IHRoaXMuaG9zdEVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgIGNvbnN0IGhvc3RFbFBvc1RvcCA9IHRoaXMuaG9zdEVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgY29uc3QgaG9zdEVsSGVpZ2h0ID0gdGhpcy5ob3N0RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50U2Nyb2xsaW5nID0gdGhpcy5ob3N0RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgXG4gICAgICBjb25zdCB4ID0gaG9zdEVsUG9zTGVmdCArIDIwO1xuICAgICAgY29uc3QgeSA9IGhvc3RFbFBvc1RvcCArIGhvc3RFbEhlaWdodCAtIHBhcmVudEVsZW1lbnRTY3JvbGxpbmcgLSAxMDtcbiAgXG4gICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7IC8vIDUwMHB4XG4gICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgXG4gICAgICB0b29sdGlwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VUb29sdGlwKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRvb2x0aXBFbGVtZW50O1xuICAgIH1cbiAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/Tooltip.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nclass DOMHelper {\n    static clearEventListeners(element) {\n      const clonedElement = element.cloneNode(true);\n      element.replaceWith(clonedElement);\n      return clonedElement;\n    }\n  \n    static moveElement(elementId, newDestinationSelector) {\n      const element = document.getElementById(elementId);\n      const destinationElement = document.querySelector(newDestinationSelector);\n      destinationElement.append(element);\n      element.scrollIntoView({ behavior: 'smooth' });\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRE9NSGVscGVyIHtcbiAgICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZEVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gICAgfVxuICBcbiAgICBzdGF0aWMgbW92ZUVsZW1lbnQoZWxlbWVudElkLCBuZXdEZXN0aW5hdGlvblNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XG4gICAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9XG4gIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\n    const finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement('script');\n    analyticsScript.src = 'assets/scripts/analytics.js';\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSBcIi4vQXBwL1Byb2plY3RMaXN0XCI7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgnYWN0aXZlJyk7XG4gICAgY29uc3QgZmluaXNoZWRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG4gICAgYWN0aXZlUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChmaW5pc2hlZFByb2plY3RzTGlzdClcbiAgICApO1xuICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxuICAgICk7XG5cbiAgICAvLyBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5hbHl0aWNzLCAzMDAwKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLWFuYWx5dGljcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcbiAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBhbmFseXRpY3NTY3JpcHQuc3JjID0gJ2Fzc2V0cy9zY3JpcHRzL2FuYWx5dGljcy5qcyc7XG4gICAgYW5hbHl0aWNzU2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChhbmFseXRpY3NTY3JpcHQpO1xuICB9XG59XG5cbkFwcC5pbml0KCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });