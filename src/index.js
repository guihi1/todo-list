import './styles.css';
import {
  dropdown, addProject, showForm, hideForm, showTasks, index,
} from './UI';
import Task from './constructor';
import { newProject, showProjectTasks, today } from './project';
import { populateStorage, rememberTasks, deleteFromStorage } from './storage';

// eslint-disable-next-line prefer-const
export let myTasks = [];

rememberTasks();
dropdown();
addProject();
showForm();
hideForm();
newProject();
showProjectTasks();

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  if (document.querySelector('form').classList.contains('editing')) {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const project = document.getElementById('project').value;
    myTasks[index] = new Task(title, date, priority, description, project);
    deleteFromStorage();
    document.querySelector('form').classList.remove('editing');
    document.getElementById('add').textContent = 'Add task';
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').value = '1';
    document.getElementById('project').value = 'inbox';
    if (document.getElementById('content-title').textContent === 'Today') {
      const todayTasks = myTasks.filter((x) => x.date.substring(0, 10) === today);
      showTasks(todayTasks);
    } else if (document.getElementById('content-title').textContent === 'All tasks') {
      showTasks(myTasks);
    } else if (document.getElementById('content-title').textContent === 'Inbox') {
      const inboxTasks = myTasks.filter((x) => x.project === 'inbox');
      showTasks(inboxTasks);
    } else {
      const projectName = document.getElementById('content-title').textContent;
      const projectTasks = myTasks.filter((x) => x.project === projectName);
      showTasks(projectTasks);
    }
  } else {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const project = document.getElementById('project').value;
    const newTask = new Task(title, date, priority, description, project);
    myTasks.push(newTask);
    populateStorage();
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').value = '1';
    document.getElementById('project').value = 'inbox';
    if (document.getElementById('content-title').textContent === 'Today') {
      const todayTasks = myTasks.filter((x) => x.date.substring(0, 10) === today);
      showTasks(todayTasks);
    } else if (document.getElementById('content-title').textContent === 'All tasks') {
      showTasks(myTasks);
    } else if (document.getElementById('content-title').textContent === 'Inbox') {
      const inboxTasks = myTasks.filter((x) => x.project === 'inbox');
      showTasks(inboxTasks);
    } else {
      const projectName = document.getElementById('content-title').textContent;
      const projectTasks = myTasks.filter((x) => x.project === projectName);
      showTasks(projectTasks);
    }
  }
});
