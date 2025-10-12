const scroller3 = scrollama();

const image_ids = [
    'figure-verlaines',
    'figure-sneaky-feelings',
    'figure-chills',
    'figure-stones',
    'figure-flying-nun',
    'figure-bats',
    'figure-lbgp',
    'figure-radio-one',
]

for (let i = 0; i < image_ids.length; i++) {
    let image = document.getElementById(image_ids[i]);
    image.style.zIndex = i + 1; // set z indices

    if (i > 0) {
        image.classList.add("hidden"); // hide all but first
    }
}

scroller3.setup({
        step: ".step3",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        let nodes = document.getElementsByClassName("timeline3-node");
        
        for (let node of nodes) {
            node.classList.remove('active');
        }

        nodes[response.index].classList.add('active');

        for (var i = 0; i <= response.index; i++) {
            show(image_ids[i]);
        }

        for (var i = response.index + 1; i < image_ids.length; i++) {
            hide(image_ids[i]);
        }
    });