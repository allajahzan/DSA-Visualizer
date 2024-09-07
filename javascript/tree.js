function loadArrayPage() {

    let basic_div = document.getElementById('basic_operations')
    let special_div = document.getElementById('special_operations')
    let search_div = document.getElementById('search_operations')

    basic_div.style.display = 'none'
    special_div.style.display = 'none'
    // set operations
    let which = localStorage.getItem('which')


    if (which) {
        if (which === 'basic') {
            basic_div.style.display = 'block'
            special_div.style.display = 'none'
            search_div.style.display = 'none'
        } else if (which === 'special') {
            special_div.style.display = 'block'
            basic_div.style.display = 'none'
            search_div.style.display = 'none'
        } else {
            search_div.style.display = 'block'
            special_div.style.display = 'none'
            basic_div.style.display = 'none'
        }
    } else {
        basic_div.style.display = 'block'
        special_div.style.display = 'none'
    }
}


// show tree properties

async function showAnswer(event) {


    let html = `<ul>
                    <li>
                        <div class="node parentnode rootnode">1</div>
                        <ul class='ul'>
                            <li class='li'>
                                <div class="node parentnode childnode">2</div>
                                <ul class='ul'>
                                    <li class='li'>
                                        <div class="node childnode leafnode">5</div>
                                    </li>
                                    <li>
                                        <div class="node childnode leafnode">6</div>
                                    </li>
                                </ul>
                            </li>
                            <li class='ul'>
                                <div class="node parentnode childnode leafnode">3</div>
                                <!-- <ul>
                                    <li>
                                        <div class="node">F</div>
                                    </li>
                                    <li>
                                        <div class="node">G</div>
                                    </li>
                                </ul> -->
                            </li>
                            <li>
                                <div class="node parentnode childnode">4</div>
                                <ul>
                                    <li>
                                        <div class="node childnode leafnode">7</div>
                                    </li>
                                    <li>
                                        <div class="node childnode leafnode">8</div>
                                    </li>
                                   
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>`

    let html1 = `<ul>
                    <li>
                        <div style="opacity: .2;" class="node parentnode rootnode">1</div>
                        <ul>
                            <li>
                                <div style="opacity: .2;" class="node parentnode childnode">2</div>
                                <ul>
                                    <li>
                                        <div style="opacity: .2;" class="node childnode leafnode">5</div>
                                    </li>
                                    <li>
                                        <div style="opacity: .2;" class="node childnode leafnode">6</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div style="opacity: .2;" class="node parentnode childnode leafnode">3</div>
                                <!-- <ul>
                                    <li>
                                        <div class="node">F</div>
                                    </li>
                                    <li>
                                        <div class="node">G</div>
                                    </li>
                                </ul> -->
                            </li>
                            <li>
                                <div style="opacity: .2;" class="node parentnode childnode">4</div>
                                <ul>
                                    <li>
                                        <div style="opacity: .2;" class="node childnode leafnode">7</div>
                                    </li>
                                    <li>
                                        <div style="opacity: .2;" class="node childnode leafnode">8</div>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>`


    const selectedOption = event.target.value;


    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 100);
    })


    if (selectedOption === 'wholeTree') {
        document.getElementById('tree_div').innerHTML = html
        const elements = document.querySelectorAll('.node');

        elements.forEach(element => {
            element.style.backgroundColor = 'orange';
        });

    } else if (selectedOption === 'edges') {
        document.getElementById('tree_div').innerHTML = html1
    } else if (selectedOption === 'node') {
        setNodes(html, selectedOption)
    } else if (selectedOption === 'leafnode') {
        setNodes(html1, selectedOption)
        document.querySelectorAll('.leafnode').forEach((ele) => {
            ele.style.opacity = '1'
        })
    } else if (selectedOption === 'childnode') {
        setNodes(html1, selectedOption)
        document.querySelectorAll('.childnode').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }
    else if (selectedOption === 'parentnode') {
        setNodes(html1, selectedOption)
        document.querySelectorAll('.parentnode').forEach((ele) => {
            ele.style.opacity = '1'
        })
    } else if (selectedOption === 'height') {
        setNodes(html)

        // make arrow less opactiy
        const treeItemsA = document.querySelectorAll('.tree li');
        treeItemsA.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-color1');
        });

        // make arrow less opactiy
        const treeItemsB = document.querySelectorAll('.tree ul');
        treeItemsB.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-color1');
        });


        // make arrow less opactiy
        const treeItems = document.querySelectorAll('.tree .ul');
        treeItems.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-color');
        });

        // make arrow less opactiy
        const treeItems1 = document.querySelectorAll('.tree .li');
        treeItems1.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-color');
        });


        document.querySelectorAll('.node').forEach((ele) => {
            ele.style.opacity = '.2'
        })

    }
    else {
        setNodes(html1, selectedOption)
        document.querySelectorAll('.rootnode').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }


}


function setNodes(html, selectedOption) {

    document.getElementById('tree_div').innerHTML = html

    // make arrow less opactiy
    const treeItems = document.querySelectorAll('.tree li');
    treeItems.forEach(item => {
        item.style.setProperty('--border-color', 'black');
        item.classList.add('custom-color1');
    });

    // make arrow less opactiy
    const treeItems1 = document.querySelectorAll('.tree ul');
    treeItems1.forEach(item => {
        item.style.setProperty('--border-color', 'black');
        item.classList.add('custom-color1');
    });

    if (selectedOption) {
        const elements = document.querySelectorAll(`.${selectedOption}`);

        elements.forEach(element => {
            element.style.backgroundColor = 'orange';
        });
    }

}