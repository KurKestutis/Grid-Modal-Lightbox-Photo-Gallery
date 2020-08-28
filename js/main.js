// When the user clicks on the button, open the modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// ------------MODAL CLOSE FUNCTIONS--------------
// Get the <span> element that close the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
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

// ------------ MODAL SLIDESHOW GALLERY --------------
var images;

var imagesEvents = [
  'img/events/1_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/2_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/3_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/4_ren_Foto_Kestutis_Kurienius.jpg',
  'img/events/5_ren_Foto_Kestutis_Kurienius19_DofE_2018-06-21_KK_img_8069.jpg',
  'img/events/6_ren_Foto_Kestutis_Kurienius_28_DofE_2018-06-21_KK_img_8541.jpg',
];

var imagesConferences = [
  'img/conferences/1_konf_Foto_Kestutis_Kurienius.jpg',
  'img/conferences/2_konf_Foto_Kestutis_Kurienius_03_DofE_2018-06-21_KK_img_7264.jpg',
  'img/conferences/3_konf_Foto_Kestutis_Kurienius_IMG_1092.1.jpg',
  'img/conferences/4_konf_Foto_Kestutis_Kurienius_21_DofE_2018-06-21_KK_img_8081.jpg',
  'img/conferences/5_konf_Foto_Kestutis_Kurienius_ IMG_1193.jpg',
  'img/conferences/6_konf_Foto_Kestutis_Kurienius_147_Luxembourg_Delegation_In_Lithuania-2017_IMG_8773_KK.jpg',
  'img/conferences/7_konf_Foto_Kestutis_Kurienius_145_Luxembourg_Delegation_In_Lithuania-2017_IMG_8746_KK.jpg',
];

function galleryNumber(g) {
  if (g == 1) {
    images = imagesEvents;
  } else if (g == 2) {
    images = imagesConferences;
  }
}

var num = 0;

function currentSlide(n) {
  var slideShowPlace = document.getElementById('slider');

  slideShowPlace.src = images[n - 1];
  num = n - 1;
}

function next() {
  var slideShowPlace = document.getElementById('slider');
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slideShowPlace.src = images[num];
}

function prev() {
  var slideShowPlace = document.getElementById('slider');
  num--;
  if (num <= 0) {
    num = images.length - 1;
  }
  slideShowPlace.src = images[num];
}
