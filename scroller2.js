const scroller2_image_ids = [
    'figure-enemy',
    'figure-grigg',
    'figure-dodd',
    'figure-bored-games',
];

const scroller2 = scrollama();
scroller2.setup({
        step: ".step2",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        let nodes = document.getElementsByClassName("timeline-node");
        
        for (let node of nodes) {
            node.classList.remove('active')
        }

        nodes[response.index].classList.add('active')
    
        for (var i = 0; i <= response.index; i++) {
            show(scroller2_image_ids[i]);
        }

        for (var i = response.index + 1; i < scroller2_image_ids.length; i++) {
            hide(scroller2_image_ids[i]);
        }
    });

function hide(id) {
    document.getElementById(id).classList.remove('visible');
    document.getElementById(id).classList.add('hidden');
}
function show(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
}

window.addEventListener("resize", scroller2.resize);