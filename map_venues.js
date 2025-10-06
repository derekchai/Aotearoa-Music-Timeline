// Set up map
var venues_map = new L.Map("venues_map", {
    scrollWheelZoom: false,
})
    .setView(DUNEDIN_COORDINATES, 13)

L.tileLayer(TILE_LAYER_URL, {
    maxZoom: 20,
    attribution: ATTRIBUTION,
    fadeAnimation: false,
}).addTo(venues_map);