const textArea = document.getElementById('textarea');
const taskEl = document.getElementById('task');
const eventEl = document.getElementById('event');
const meetingEl = document.getElementById('meeting');
const addButtonEl = document.getElementById('addButton');
const clearButtonEl = document.getElementById('clearButton');
const createNoteEl = document.getElementById('createNote');
const dailyNote = document.getElementById('daily-note');
const noteContainer = document.getElementById('note-container');
const loginButton = document.getElementById('login');

let deleteEl;
let inputType;

function inputTypeChecked(e) {
    if (inputType) {
        inputType.classList.toggle('checked');
    }
    inputType = document.getElementById(e.target.id);
    inputType.classList.add('checked');

}

function writeNote() {
    if (textArea.value) {
        switch (inputType.id) {
            case "task":
                dailyNote.innerHTML += `
                <table id="table">
                    <tr>
                        <td>${textArea.value}</td>
                        <td><i class="fa fa-circle">&nbsp;&nbsp;&nbsp;</i>${inputType.id}<i class='fa fa-trash' onclick="deleteInput(event)"></i></td>
                    </tr>
                </table>    
                `;
                textArea.value = '';
                break;
            case "event":
                dailyNote.innerHTML += `
                <table id="table">
                    <tr>
                        <td>${textArea.value}</td>
                        <td><i class="fa fa-calendar-check">&nbsp;&nbsp;&nbsp;</i>${inputType.id}<i class='fa fa-trash' onclick="deleteInput(event)"></i></td>
                    </tr>
                </table>    
                `;
                textArea.value = '';
                break;
            case "meeting":
                dailyNote.innerHTML += `
                <table id="table">
                    <tr>
                        <td>${textArea.value}</td>
                        <td><i class="fa fa-location-arrow"">&nbsp;&nbsp;&nbsp;</i>${inputType.id}<i class='fa fa-trash' onclick="deleteInput(event)"></i></td>
                    </tr>
                </table>      
                `;
                textArea.value = '';
                break;
            default:
                break;
        }
    }
}

function clearNote() {
    dailyNote.innerHTML = '';
}

function createNote() {
    let createdNote = document.createElement('div');
    let createdIcon = document.createElement('i');
    if (dailyNote.innerHTML != '') {
        createdNote.innerHTML = dailyNote.innerHTML;
        createdNote.classList.add('created-note');
        noteContainer.appendChild(createdNote);
    }
    createdNote.querySelectorAll('td:nth-child(2n)').forEach(el => el.appendChild(createdIcon));
    createdNote.querySelectorAll('.fa-trash').forEach(e => {
        e.classList.replace('fa-trash', 'fa-check-double');
        e.setAttribute('onclick', 'taskDone(event)');
    });

    dailyNote.innerHTML = '';
    textArea.value = '';
}

function deleteInput(e) {
    let input = e.target.parentElement.parentElement;
    input.remove();
}

function taskDone(e) {
    e.target.parentNode.previousElementSibling.classList.add('note-done');
}

taskEl.addEventListener('click', inputTypeChecked);
eventEl.addEventListener('click', inputTypeChecked);
meetingEl.addEventListener('click', inputTypeChecked);
addButtonEl.addEventListener('click', writeNote);
clearButtonEl.addEventListener('click', clearNote);
createNoteEl.addEventListener('click', createNote)