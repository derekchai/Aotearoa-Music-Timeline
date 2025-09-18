var map = L.map("map").setView([53, 12], 5);

// Style URL format in XYZ PNG format; see our documentation for more options
L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    },
).addTo(map);

L.marker([-36.8484, 174.7622]).addTo(map).bindPopup("Sky Tower").openPopup();

const scroller = scrollama();

scroller
    .setup({
        step: ".step",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        if (response.index == 1) {
            map.flyTo([-45.8795, 170.5006], 13, {
                animate: true,
                duration: 1,
            });
        } else if (response.index == 2) {
            map.flyTo([-36.8509, 174.7645], 13, {
                animate: true,
                duration: 1,
            });
        } else if (response.index == 0) {
            map.flyTo([-40.9006, 174.886], 5, {
                animate: true,
                duration: 1,
            });
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

        // const content = response.element.getAttribute('data-content');
        // document.getElementById('sticky-content').textContent = content;
    });

// Handle window resize
window.addEventListener("resize", scroller.resize);
