const scroller4 = scrollama();

const scroller4_image_ids = [
    'figure-straitjacket-fits',
];

for (let step of document.querySelectorAll(".step4 > p")) {
    step.textContent = "◂ " + step.textContent;
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