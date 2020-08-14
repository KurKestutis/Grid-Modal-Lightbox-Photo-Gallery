// Get the modal
// var modal = document.getElementById('myModal');
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Get the button that opens the modal
// var btn = document.getElementById('eventsGrid');

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = 'block';
// };

// MODAL CLOSE FUNCTIONS
// Get the <span> element that close the modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close tje modal
span.onclick = function () {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function () {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
