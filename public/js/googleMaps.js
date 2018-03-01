function initMap() {
	// Create center marker at UCSD
	var ucsd_ltlng = {lat:32.8788, lng:-117.2359};

	//Create map obj and specify DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position:ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}