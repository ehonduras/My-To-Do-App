Rjesenje za prelazak iz login u submit formu i obrnuto:

!appContainer.classList.contains('hidden')? appContainer.classList.add('hidden') && signupFormContainer.classList.add('hidden'): signupFormContainer.classList.add('hidden');

-------------------------------------------------------

Rjesenje za dohvatanje citata i periodicni runner

async function getDailyQuote() {
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => quoteEl.innerHTML = data[Math.floor(Math.random() * 1000)].text)
        .catch(err => console.log(err));
}

setInterval(getDailyQuote, 50000);

-------------------------------------------------------

Rjesenje za dinamicno selektiranje elemenata - integrisani onclick atribut

-------------------------------------------------------

Rjesenje za kreiranje objekta i setanje u localstorage

    let note = {
        "noteItems": createdNote.outerHTML,
        'noteDate': createdNoteDate
    }

    createdNotes.push(note);
    localStorage.setItem("createdNotes", JSON.stringify(createdNotes));