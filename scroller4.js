const scroller4 = scrollama();

const scroller4_image_ids = [
    'figure-straitjacket-fits',
    'figure-dead-c',
    'figure-3ds',
];

// Add character to start of attribution paragraph
for (let step of document.querySelectorAll(".step4 > p")) {
    step.textContent = "◂ " + step.textContent;
}

// Set Z indices and hidden/visibile
for (let i = 0; i < scroller4_image_ids.length; i++) {
    let image = document.getElementById(scroller4_image_ids[i]);
    image.style.zIndex = i + 1;

    if (i > 0) {
        image.classList.add("hidden");
    }
}

scroller4.setup({
        step: ".step4",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        let nodes = document.getElementsByClassName("timeline4-node");
        
        for (let node of nodes) {
            node.classList.remove('active');
        }

        nodes[response.index].classList.add('active');

        for (var i = 0; i <= response.index; i++) {
            show(scroller4_image_ids[i]);
        }

        for (var i = response.index + 1; i < scroller4_image_ids.length; i++) {
            hide(scroller4_image_ids[i]);
        }
    });