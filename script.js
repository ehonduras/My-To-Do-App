const textArea = document.getElementById('textarea');
const taskEl = document.getElementById('task');
const eventEl = document.getElementById('event');
const meetingEl = document.getElementById('meeting');
const addButtonEl = document.getElementById('addButton');
const clearButtonEl = document.getElementById('clearButton');
const dailyNote = document.getElementsByClassName('daily-note');
const tableEl = document.getElementById('table');

let inputType;

function inputTypeChecked(e) {
    if (inputType) {
        inputType.classList.toggle('checked');
    }
    inputType = document.getElementById(e.target.id);
    inputType.classList.add('checked');
    console.log(inputType);
}

function writeNote() {
    tableEl.innerHTML += `
    <tr>
        <td>${textArea.value}</td>
        <td>${inputType.id}</td>
    </tr>    
    `;
}

function clearNote() {
    tableEl.innerHTML = '';
}

taskEl.addEventListener('click', inputTypeChecked);
eventEl.addEventListener('click', inputTypeChecked);
meetingEl.addEventListener('click', inputTypeChecked);
addButtonEl.addEventListener('click', writeNote);
clearButtonEl.addEventListener('click', clearNote);