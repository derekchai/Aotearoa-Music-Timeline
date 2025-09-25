const scroller2 = scrollama();
scroller2.setup({
        step: ".step2",
        offset: 0.5,
    })
    .onStepEnter((response) => {
        switch (response.index) {
            case 0: 
                hide('figure-enemy2');
                break;
            case 1:
                show('figure-enemy2')
                break;
            default:
                hide('figure-enemy2')
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

window.addEventListener("resize", scroller.resize);