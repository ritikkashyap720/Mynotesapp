console.log("Welcome to Mynotes app");
// if user add a note, add it to local storage.
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";

    // to show notes
    showNotes();

});


// to show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                 <div class="my-2 mx-2 card-body">
                 <h5 class="card-title">Note ${index + 1}</h5>
                 <p class="card-text">${element}</p>
                 <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete note</button>
                 </div>
                 </div>
                
        `

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Your added notes will appear in this section.`
    }
}

// Function to delete a note

function deleteNote(index) {
    console.log("I am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        cardTxt = cardTxt.toLowerCase();
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
            
        }


    })
});
