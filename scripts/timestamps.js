let allNotes = JSON.parse(localStorage.getItem('createdNotes'));

let filteredArray = allNotes.filter(checkNotesForDeletion);
localStorage.setItem('notes', JSON.stringify(filteredArray));

function checkNotesForDeletion(note) {
    if ((Date.now().getTime() - Date(note.noteDate).getTime()) < 172800000) {
        return note;
    }
}