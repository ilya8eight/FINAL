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