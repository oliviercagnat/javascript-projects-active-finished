/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
class DOMHelper {
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector('button:last-of-type');
    switchButton.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    console.log(this);
    console.log(project);
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex((project) => project.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((project) => project.id === projectId));
    this.projects = this.projects.filter((project) => project.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
  }
}

App.init();

// How to call switchHandlerFunction
// 1: We need to call addProject()
// I want to pass in a function that is in an other instance (from finished to activeProjectList)
// We need both instances to be finished to reach them. So we cannot pass a function
// as argument when we instantiate const activeProjectsList = new ProjectList('active')

// 2: We do setSwitchHandlerFunction()
// Below, after instantiating activeProjectsList, we can call the setSwitchHandlerFunction
// and we can set which function should be called by adding addProject in the other instance.
// So here we point at finishedProjectsList with addProject.
// We just point at the function name, we don't execute it. It will be executed when
// clicking on the button with switchProject().
// We have to bind(finishedProjectsList). The constant will be calling addProject
// with this.switchHandler but in the destination instance.

// 3: we do the same with finishedProjectsList

// 4: switchProject need to be connected with the eventListener.
// In order to be able to call an object from ProjectList inside of ProjectItem,
// we pass the method to ProjectItem in constructor with updateProjectListsFunction
// So we pass switchProject when creating the ProjectItem.
// We bind it, so this. in this.switchProject refers to this class ProjectList and not ProjectItem

// 5: moving the project from one List to an other
// We can push the project to the list.

// 6: Moving in the DOM
// We create the DOMHelper class with moveElement function with the
// elementId and newDestinationSelector.
// By doing append, we don't delete and create but move the element.

// 7: passing the ID
// In ProjectItem, we should bind the ID in the connectSwitchButton when we trigger
// the eventListener.
