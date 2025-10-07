let order = [0, 1, 2, 3]
// 0: 1977 The Enemy forms
// 1: 1978 First Wave bands form
// 2: TEMP

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

        nodes[order[response.index]].classList.add('active')
        
        switch (response.index) {
            case 0:
                show('figure-enemy')
                hide('figure-grigg')
                hide('figure-dodd')
                hide('figure-bored-games')
                break;
            case 1:
                show('figure-enemy')
                show('figure-grigg')
                hide('figure-dodd')
                hide('figure-bored-games')
                break;
            case 2:
                show('figure-enemy')
                show('figure-grigg')
                show('figure-dodd')
                hide('figure-bored-games')
                break;
            case 3: 
                show('figure-enemy')
                show('figure-grigg')
                show('figure-dodd')
                show('figure-bored-games')
                break;
            default:
                show('figure-enemy')
                hide('figure-grigg')
                hide('figure-dodd')
                hide('figure-bored-games')
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