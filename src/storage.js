import { myTasks } from '.';
import { showTasks } from './UI';

export function populateStorage() {
  localStorage.setItem('task', JSON.stringify(myTasks));
}

export function rememberTasks() {
  if (localStorage.getItem('task')) {
    myTasks = JSON.parse(localStorage.getItem('task'));
    showTasks(myTasks);
  }
}

export function deleteFromStorage() {
  localStorage.removeItem('task');
  populateStorage();
}
