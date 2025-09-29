const indicator = document.getElementById("indicator");

const scroller2 = scrollama();
scroller2.setup({
        step: ".step2",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        let nodes = document.getElementsByClassName("timeline-node");
        
        indicator.style.top = nodes[response.index].offsetTop + "px";
        switch (response.index) {
            case 1:
                hide('figure-enemy3')
                show('figure-grigg')
                break;
            case 2:
                show('figure-grigg')
                show('figure-enemy3')
                break;
            default:
                hide('figure-grigg')
                hide('figure-enemy3')
                break;
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