// Day 3

// C reate
// R ead
// U pdate
// D elete


// HOMEWORK "Contact list application with full CRUD"

var todoArray = ['Go Shopping','Study JS','Clean Room','Wash Dishes'];


// Create
function addTask() {
    var newTaskToAdd = document.getElementById('taskBox').value;
    todoArray.push(newTaskToAdd);
    display();
    clearBox();
}

// Read
function  display() {
    // h will act as a temporary string holder
    var h = '';

    // loop through array to create table row and table column dynamically
    for (var i = 0; i < todoArray.length; i++) {
        h += `<tr>`;
        h += `<td>${todoArray[i]}</td>`;
        h += `<td><button onclick="deleteTask(${i})">X</button><button onclick="updateTask(${i})">Edit</button></td>`
        h += `</tr>`;
    }

    document.getElementById('taskList').innerHTML = h;
}

// Update
function  updateTask(i) {
    var taskToUpdate = document.getElementById('taskBox').value;
    todoArray[i] = taskToUpdate;
    display();
    clearBox();
}

// Delete
function  deleteTask(i) {
    todoArray.splice(i, 1);
    display();
}

// other functions
function clearBox() {
    document.getElementById('taskBox').value = '';
}

// Execute
display();
