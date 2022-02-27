var counter = 0;

const todos = [];



class Todo  {
    constructor(todoText, todoDate) {
        this.todoText = todoText;
        this.todoDate = todoDate;
    }

    toLi() {
        const dateText = moment(this.todoDate).format("MMMM Do YYYY");
        return `<li id="note${++counter}">${this.todoText}  ---- ${dateText}   <button class='btn btn-sm btn-danger' onClick="deleteFromNotes(${counter})"> delete</button> </li>`;
    }

    toString() {
        return `${this.todoText} -- ${this.todoDate}`
    }

}




function addToNotes() {
    const inp = document.getElementById("noteText");
    const inpDate = document.getElementById("noteDate");
    const notesList = document.getElementById("notesList");
    if (inp.value == "") {
        alert("not possible, String is empty");
        return;
    }
    if (inpDate.value == "") {
        alert("not possible, Date is empty");
        return;
    }
    const today = new moment();
    const noteDate = new moment(inpDate.valueAsDate);
    if (noteDate.isBefore(today)) {
        alert("not possible, Date is in the past");
        return;
    }

    const todo = new Todo(inp.value, inpDate.valueAsDate);
    todos.push(todo);
    notesList.innerHTML += todo.toLi();
    inp.value = ""
    inpDate.value = ""

}


function deleteFromNotes(id) {
    const li_note = document.getElementById("note" + id);
    li_note.remove();

}


function findNote() {
    const search = document.getElementById("searchText");

    todos.forEach(element => {
        if (element.todoText.includes(search.value))
            alert(element)
    })

    //use filter that conforms that searched value . and show it to the user instead of all todos





}