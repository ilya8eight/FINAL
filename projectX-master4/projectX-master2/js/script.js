function initMap() {
  var uluru = {lat: 59.9387978, lng: 30.3230793};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
	  icon: {
		url: "img/mapmarker.png",
	  }
  });
}

var link = document.querySelector(".link");
var modal_window = document.querySelector(".modal_window");
var name_field = document.querySelector('.name-field');
var email_field = document.querySelector('.email-field');
var text_field = document.querySelector('.text-field');
var close = document.querySelector(".close");

link.addEventListener ('click', function() {
    modal_window.classList.toggle('modal_display');
    name_field.focus();
    console.log("Открытие модалки");
});

close.addEventListener('click', function () {
    modal_window.classList.remove('modal_display');
    name_field.value = '';
    email_field.value = '';
    text_field.value = '';
});

