export default class Task {
  constructor(title, date, priority, description, project) {
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.date = date;
    this.project = project;
  }
}
