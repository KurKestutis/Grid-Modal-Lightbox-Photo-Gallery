// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById('myBtn');
// var btn = document.getElementsByClassName('eventsGrid');
var btn = document.getElementById('eventsGrid');

// Get the <span> element that close the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close tje modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
