// Constants
const TILE_LAYER_URL =
    "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png";
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

// Functions
function flyTo(coordinates, zoom) {
    map.flyTo(coordinates, zoom, {
        animate: true,
        duration: 1,
    });
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
    }).addTo(map);
}

// Setup
var map;
setUpMap();

const scroller = scrollama();

scroller
    .setup({
        step: ".step",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        if (response.index == 1) {
            flyTo(DUNEDIN_COORDINATES, 13);
        } else if (response.index == 2) {
            flyTo(AUCKLAND_COORDINATES, 13);
        } else if (response.index == 0) {
            flyTo(NEW_ZEALAND_COORDINATES, 5);
        } else {
            flyTo(WORLD_COORDINATES, 2);
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
