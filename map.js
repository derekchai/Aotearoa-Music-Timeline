// Constants
const TILE_LAYER_URL =
    // "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png";
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
    '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, ' +
    '&copy; <a href="https://openmaptiles.org/" target="_blank">' +
    "OpenMapTiles</a> &copy; " +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">' +
    "OpenStreetMap</a>";

const WORLD_COORDINATES = [0, 0];
const NEW_ZEALAND_COORDINATES = [-40.9006, 174.886];

const DUNEDIN_COORDINATES = [-45.8795, 170.5006];
const AUCKLAND_COORDINATES = [-36.8509, 174.7645];
const UOA_COORDINATES= [-36.850135, 174.769281];
const AUT_COORDINATES = [-36.853029, 174.766415]
const ALBERT_PARK_COORDINATES = [-36.851231, 174.768291];

// Functions
function flyTo(coordinates, zoom) {
    map.flyTo(coordinates, zoom, {
        animate: true,
        duration: 1,
    });
}

function removeMarkers() {
    map.removeLayer(uoa);
    map.removeLayer(aut);
}

function setUpMap() {
    // Set up map
    map = new L.Map("map", {
        scrollWheelZoom: false,
    })
        .setView(WORLD_COORDINATES, 2)
        .setActiveArea({
            position: "relative",
            top: "0px",
            left: "-10%",
            right: "%",
            height: "100%",
        });

    // Add tile layer
    L.tileLayer(TILE_LAYER_URL, {
        maxZoom: 20,
        attribution: ATTRIBUTION,
        fadeAnimation: false,
    }).addTo(map);
}

// Setup
var map, uoa, aut;
setUpMap();

const scroller = scrollama();

scroller
    .setup({
        step: ".step",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        switch (response.index) {
            case 0:
                removeMarkers();
                flyTo(WORLD_COORDINATES, 2);
                break;

            case 1:
                removeMarkers();
                map.flyTo(DUNEDIN_COORDINATES, 13, {
                    animate: true,
                    duration: 5,
                });
                break;

            case 2:
                flyTo(ALBERT_PARK_COORDINATES, 16);

                // Add markers
                uoa = L.marker(UOA_COORDINATES).addTo(map);
                aut = L.marker(AUT_COORDINATES).addTo(map);
                uoa.bindPopup("<b>The Scavengers</b><br>1977 The University of Auckland").openPopup();
                aut.bindPopup("<b>The Suburban Reptiles</b><br>1977 Auckland Technical Institute").openPopup();
                break;
                
            default:
                removeMarkers();
                flyTo(WORLD_COORDINATES, 2);
                break;
        }

        if (response.index <= 2) {
            document.getElementById("map").classList.add("visible");
            document.getElementById("map").classList.remove("hidden");
        } else {
            document.getElementById("map").classList.remove("visible");
            document.getElementById("map").classList.add("hidden");
        }

        document
            .querySelectorAll(".step")
            .forEach((step) => step.classList.remove("active"));
        response.element.classList.add("active");
    });

// Handle window resize
window.addEventListener("resize", scroller.resize);
