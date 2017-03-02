function initMap(){

	var ucsd_ltlng={lat:32.8850, lng:-117.2413};

	var map = new google.maps.Map(document.getElementById('map'), {
		center:ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}