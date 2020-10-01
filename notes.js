console.log(`Welcome to Js Notes`);
showNotes();
var imp = false;
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  let myObj = {
    title: addTitle.value,
    note: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});


function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard card m-3 box2 col-md-3 px-0">
        <div class="card-header bg-secondary text-light box3 font-weight-bold">
        Note no : ${index + 1}
        </div>
        <div class="card-body p-3">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.note}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary py-1 my-0 box2">Delete</button>
        </div>
    </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="jumbotron jumbotron-fluid bg-warning p-3 ml-5 w-75 box2">
      <div class="container">
        <h2>No Notes added</h1>
        <hr>
        <p class="lead">Please add a new note from above.</p>
      </div>
    </div>`;
  }
}

function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value;
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTitle = element.getElementsByTagName("h5")[0].innerText;
    let cardTxt = element.getElementsByTagName("p")[0].innerText;

    if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  })
})
