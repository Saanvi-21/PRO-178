let latitude = 13.100549959887912, longitude = 77.58855345559856;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoid2F0ZXJtZWxvbi1zb3JiZXQiLCJhIjoiY2t3eGVqdmF0MGRhbjJvcDhqbGNneTBwbyJ9.SGOuZVohBLLNdi2stpy79g';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4,
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#taj_mahal")
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([27.175429516403284, 78.04209112128393])
	.addTo(map);


var img2 = document.querySelector("#charminar")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([17.36159565618849, 78.47465996025016])
	.addTo(map);
