let allNotes = JSON.parse(localStorage.getItem('createdNotes'));

let filteredArray = allNotes.filter(checkNotesForDeletion);


function checkNotesForDeletion(note) {
    if ((Date.now().getTime() - Date(note.noteDate).getTime()) < 172800000) {
        return note;
    }
}