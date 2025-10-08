const scroller3 = scrollama();

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
    });