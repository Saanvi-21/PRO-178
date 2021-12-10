let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = "pk.eyJ1Ijoid2F0ZXJtZWxvbi1zb3JiZXQiLCJhIjoiY2t3eGVqdmF0MGRhbjJvcDhqbGNneTBwbyJ9.SGOuZVohBLLNdi2stpy79g"

var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude, latitude],
    zoom : 4
})

var img1 = document.querySelector("#taj_mahal")
var img2 = document.querySelector("#charminar")

var marker1 = new mapboxgl.Marker({
    element : img1
})

.setLngLat([27.175074467170585, 78.0421474475936])
.addTo(map);

map.addControl(
    new mapboxgl.GeolocateControl({
        accessToken : mapboxgl.accessToken,
        mapboxgl : mapboxgl
    })
)