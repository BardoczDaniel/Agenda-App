
class ToDoItem {

    constructor(content, number, date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.number = number;
        this.completed = false;
    }


    static fromJSON(json) {
        let toDoItem = new ToDoItem();
        toDoItem.id = json.id;
        toDoItem.content = json.content;
        toDoItem.date = json.date;
        toDoItem.number = json.number;
        toDoItem.completed = json.completed;

        return toDoItem;
    }
}

export default ToDoItem;