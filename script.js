const textArea = document.getElementById('textarea');
const taskEl = document.getElementById('task');
const eventEl = document.getElementById('event');
const meetingEl = document.getElementById('meeting');
const addButtonEl = document.getElementById('addButton');
const clearButtonEl = document.getElementById('clearButton');
const createNoteEl = document.getElementById('createNote');
const dailyNote = document.getElementById('daily-note');
const tableEl = document.getElementById('table');
const noteContainer = document.getElementById('note-container');

let inputType;
let createdNote;

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
                        <td><i class="fa fa-circle">&nbsp;&nbsp;&nbsp;</i>${inputType.id}</td>
                    </tr>
                </table>    
                `;
                break;
            case "event":
                dailyNote.innerHTML += `
                <table id="table">
                    <tr>
                        <td>${textArea.value}</td>
                        <td><i class="fa fa-calendar-check">&nbsp;&nbsp;&nbsp;</i>${inputType.id}</td>
                    </tr>
                </table>    
                `;
                break;
            case "meeting":
                dailyNote.innerHTML += `
                <table id="table">
                    <tr>
                        <td>${textArea.value}</td>
                        <td><i class="fa fa-location-arrow"">&nbsp;&nbsp;&nbsp;</i>${inputType.id}</td>
                    </tr>
                </table>      
                `;
                break;
            default:
                break;
        }
    }

    textArea.value = '';

}

function clearNote() {
    dailyNote.innerHTML = '';
}

function createNote() {
    if(dailyNote.innerHTML != ''){
        createdNote = dailyNote;
        createdNote.classList.replace('daily-note', 'created-note');
        noteContainer.innerHTML += createdNote.outerHTML;
    }
    dailyNote.innerHTML = '';
}

taskEl.addEventListener('click', inputTypeChecked);
eventEl.addEventListener('click', inputTypeChecked);
meetingEl.addEventListener('click', inputTypeChecked);
addButtonEl.addEventListener('click', writeNote);
clearButtonEl.addEventListener('click', clearNote);
createNoteEl.addEventListener('click', createNote)