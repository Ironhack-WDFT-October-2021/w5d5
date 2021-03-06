// mapbox intro
OO
mapboxgl.accessToken = 'your key from mapbox';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/jnrdmnn/ckl1aoosu0afb17r27yya1ti5', // style URL
	// doubleClickZoom: false,
	center: [13.4532813, 52.5329816], // starting position [lng, lat]
	zoom: 15, // starting zoom
	// pitch: 100
});

const nav = new mapboxgl.NavigationControl()
map.addControl(nav, 'top-left')

// setting a popup
// const popup = new mapboxgl.Popup({
// 	closesButton: true
// })

// popup.setLngLat([13.4532813, 52.5329816])
// 	.setHTML('<h1>Hello</h1>')
// 	.addTo(map)




const coords = [
	[13.405, 52.52],
	[13.6, 52.6]
]

coords.forEach(coord => {
	new mapboxgl.Marker({
		color: 'green',
	}).setLngLat(coord)
		.addTo(map)
})

const addMarker = e => {
	new mapboxgl.Marker({
		color: 'yellow',
		draggable: true
	}).setLngLat(e.lngLat)
		.addTo(map)
		.on('dragend', event => console.log(event.target._lngLat))
}

// map.on('click', e => console.log(e.lngLat))
map.on('click', addMarker)

// new mapboxgl.Marker({
// 	color: 'red',
// 	draggable: true
// }).setLngLat([13.4532813, 52.5329816])
// 	.addTo(map)
// 	.on('dragend', event => console.log(event.target._lngLat))

