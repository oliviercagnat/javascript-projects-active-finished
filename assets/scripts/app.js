/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElementt.removeChild(this.element);
    }
  }

  attach() {
    // document.body.append(this.element);
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element,
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'DUMMY!';
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveToolTip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) {
      return;
    }
    const tooltip = new Tooltip(() => {
      this.hasActiveToolTip = false;
    });
    tooltip.attach();
    this.hasActiveToolTip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoButton = projectItemElement.querySelector('button:first-of-type');
    moreInfoButton.addEventListener('click', this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchButton = projectItemElement.querySelector('button:last-of-type');
    switchButton = DOMHelper.clearEventListeners(switchButton);
    switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchButton.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
  }

  update(updateProjectListsFunction, type) {
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this));
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

// HANDLING THE SWITCH BUTTON

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
// the eventListener. The ID is sent to switchProject.

// PROBLEM: switching back
// 1: when clicking, once we switched the item one time, we get an error when switching again
// It's because we still have the same eventListener than when we created the button item
// of the original List.
// -> we need to mae sure that when we switch a project, it also update the projectList.

// 2: we create update method with new switchProject (same as when we create ProjectItem)
// We also pass the type. So it permits us to create a new EventListener.
// But we got a memory leak since we still have the old one existing.

// 3: We need to clear the old eventListener before.
// we create in DOMHelper a clearEventListeners with the element as parameter
// We clone the node and replace it, so we ditch the old eventListener.

// 4: In the connectSwitchButton, we clear the old listener.
// We call the DOMHelper, and pass the switchButton as parameter.
// We set the switchBtn equal to the newly returned button.

// 5: Update the textContent
// If the type is equal to active, we put Finish, otherwise activate.
// We need to pass the type, when creating the ProjectItem.

// HANDLING THE MORE INFO BUTTON

// 1: We use arrow function
// "this" will always refer to the class it has been added.

// 2: We limit the tooltip box to just 1
// We create an hasActiveTooltip parameter.
// we call a method we receiver in Tooltip, closeNotifierFunction
//

// ADDING INHERITANCE

// 1: Create a Component class
// the attach() shoud just append something.
// We call create() in the constructor, so the Tooltip class handles the creation
// of the element when instantiated.
