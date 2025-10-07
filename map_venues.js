const BENEFICIARIES_HALL = [-45.869233, 170.504875];
const CAPTAIN_COOK_HOTEL = [-45.866952, 170.508491];
const CORONATION_HALL = [-45.858126, 170.500402];
const EMPIRE_TAVERN = [-45.880190, 170.499983];

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

addPopup(BENEFICIARIES_HALL,
    "<b>Old Beneficiaries Hall</b><br>"
    + "The Old Beneficiaries Hall hosted Split Enz<cite> (RNZ Music 2017)"
    + "</cite>, The Enemy's first public performance<cite> (Robertson 1991, 88)"
    + "</cite>, The Same supporting The Clean<cite> (Robertson 1991, 24)</cite>"
    + ", among a myriad of other bands of the era."
);
addPopup(CAPTAIN_COOK_HOTEL,
    "<b>Captain Cook Hotel</b><br>"
    + "The Cook, one of the few \"large pubs which engaged bands\"<cite> "
    + "(Robertson 1991, 88)</cite> is one of the most famous venues of the"
    + " scene."
);
addPopup(CORONATION_HALL,
    "<b>Māori Hill Coronation Hall</b><br>"
    + "The Coronation Hall was a Council-owned venue. It's ease of hiring"
    + "<cite> (Robertson 1991, 88)</cite> made it an attractive option for "
    + "bands such as The Same, Bored Games<cite> (Robertson 1991, 24)</cite>"
    + ", The Chills, and The Clean<cite> (RNZ Music 2017)</cite>, who played "
    + "there."
);
addPopup(EMPIRE_TAVERN,
    "<b>Empire Tavern</b><br>"
    + "Often considered the \"heart\" of the Dunedin Sound<cite> (RNZ Music "
    + "2017)</cite>; Dr. Graeme Downes (The Verlaines) compares the Empire "
    + "to \"what the Cavern Club is to Liverpool in terms of what it helped "
    + "spawn\"<cite> (Heritage New Zealand n.d.)</cite>."
)

function addPopup(coordinates, popup) {
    let marker = L.marker(coordinates).addTo(venues_map);
    marker.bindPopup(popup).openPopup();
}