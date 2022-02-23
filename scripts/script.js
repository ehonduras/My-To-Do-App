const textArea = document.getElementById('textarea');
const taskEl = document.getElementById('task');
const eventEl = document.getElementById('event');
const meetingEl = document.getElementById('meeting');
const addButtonEl = document.getElementById('addButton');
const clearButtonEl = document.getElementById('clearButton');
const createNoteEl = document.getElementById('createNote');
const dailyNote = document.getElementById('daily-note');
const noteContainer = document.getElementById('note-container');
const appContainer = document.querySelector('.appContainer');
const loginFormContainer = document.querySelector('.login-form-container');
const signupFormContainer = document.querySelector('.signup-form-container');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const quoteEl = document.getElementById('quote');

let deleteEl;
let inputType;
let createdNoteDate;
let createdNotes = [];

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
    let noteDate = document.createElement('div');
    let createdIcon = document.createElement('i');
    createdNoteDate = new Date();

    if (dailyNote.innerHTML != '') {
        createdNote.innerHTML = dailyNote.innerHTML;
        createdNote.classList.add('created-note');
        noteContainer.appendChild(createdNote);
        noteDate.innerHTML = createdNoteDate.toString().split('G')[0];
        noteDate.classList.add('note-date');
        createdNote.appendChild(noteDate);
    }
    createdNote.querySelectorAll('td:nth-child(2n)').forEach(el => el.appendChild(createdIcon));
    createdNote.querySelectorAll('.fa-trash').forEach(e => {
        e.classList.replace('fa-trash', 'fa-check-double');
        e.setAttribute('onclick', 'taskDone(event)');
    });

    dailyNote.innerHTML = '';
    textArea.value = '';

    let note = {
        "noteItems": createdNote.outerHTML,
        'noteDate': createdNoteDate
    }

    createdNotes.push(note);
    localStorage.setItem("createdNotes", JSON.stringify(createdNotes));
}

function deleteInput(e) {
    let input = e.target.parentElement.parentElement;
    input.remove();
}

function taskDone(e) {
    e.target.parentNode.previousElementSibling.classList.add('note-done');
    e.target.remove();
}

function loginFunction() {
    !appContainer.classList.contains('hidden') ? appContainer.classList.add('hidden') && signupFormContainer.classList.add('hidden') : signupFormContainer.classList.add('hidden');
    loginFormContainer.classList.toggle('hidden');

    if (loginFormContainer.classList.contains('hidden')) {
        appContainer.classList.remove('hidden')
    }
}

function signupFunction() {
    !appContainer.classList.contains('hidden') ? appContainer.classList.add('hidden') && loginFormContainer.classList.add('hidden') : loginFormContainer.classList.add('hidden');
    signupFormContainer.classList.toggle('hidden');

    if (signupFormContainer.classList.contains('hidden')) {
        appContainer.classList.remove('hidden')
    }
}

function backHomeFunction() {
    signupFormContainer.classList.add('hidden');
    loginFormContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
}

async function getDailyQuote() {
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => quoteEl.innerHTML = data[Math.floor(Math.random() * 1000)].text)
        .catch(err => console.log(err));
}

setInterval(getDailyQuote, 50000);


taskEl.addEventListener('click', inputTypeChecked);
eventEl.addEventListener('click', inputTypeChecked);
meetingEl.addEventListener('click', inputTypeChecked);
addButtonEl.addEventListener('click', writeNote);
clearButtonEl.addEventListener('click', clearNote);
createNoteEl.addEventListener('click', createNote);
loginButton.addEventListener('click', loginFunction);
signupButton.addEventListener('click', signupFunction);