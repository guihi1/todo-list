import { showTasks } from './UI';
import { myTasks } from '.';

export function newProject() {
  const projectNameArray = [];
  for (const task of myTasks) {
    if (task.project !== 'inbox') {
      projectNameArray.push(task.project);
    }
  }

  const uniqueProjectName = Array.from(new Set(projectNameArray));

  for (let i = 0; i < uniqueProjectName.length; i += 1) {
    const projectSelect = document.getElementById('project');
    const projectName = uniqueProjectName[i];
    const newOption = document.createElement('option');
    newOption.textContent = projectName;
    newOption.setAttribute('value', `${projectName}`);
    projectSelect.appendChild(newOption);
    document.getElementById('new-project').value = '';
  }

  const button = document.querySelector('#projectName-button');
  button.addEventListener('click', () => {
    const projectSelect = document.getElementById('project');
    const projectName = document.getElementById('new-project').value;
    const newOption = document.createElement('option');
    newOption.textContent = projectName;
    newOption.setAttribute('value', `${projectName}`);
    projectSelect.appendChild(newOption);
    document.getElementById('new-project').value = '';
  });
}

export let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`;

export function showProjectTasks() {
  const inbox = document.querySelector('#inbox');
  inbox.addEventListener('click', () => {
    document.querySelector('#content-title').textContent = 'Inbox';
    const inboxTasks = myTasks.filter((x) => x.project === 'inbox');
    showTasks(inboxTasks);
  });

  const todayProject = document.querySelector('#today');
  todayProject.addEventListener('click', () => {
    document.querySelector('#content-title').textContent = 'Today';
    const todayTasks = myTasks.filter((x) => x.date.substring(0, 10) === today);
    showTasks(todayTasks);
  });

  const allTasks = document.querySelector('#all-tasks');
  allTasks.addEventListener('click', () => {
    document.querySelector('#content-title').textContent = 'All tasks';
    showTasks(myTasks);
  });
}
