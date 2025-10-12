const scroller4 = scrollama();

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

        // for (var i = 0; i <= response.index; i++) {
        //     show(image_ids[i]);
        // }

        // for (var i = response.index + 1; i < image_ids.length; i++) {
        //     hide(image_ids[i]);
        // }
    });