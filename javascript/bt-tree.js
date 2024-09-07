// show tree properties

async function showResult(event) {


    let html1 = `<ul>
                    <li>
                        <div style="background-color: orange;" class="bt-node bt-rootNode parentnode1">1</div>
                        <ul class="hight">
                            <li style="position: relative; left: 5px;">
                                <div style="background-color: orange;" class="bt-node childnode1 parentnode1">2</div>
                                <ul>
                                    <li>
                                        <div style="background-color: orange;" class="bt-node asleft childnode1">4</div>
                                    </li>
                                    <li>
                                        <div style="background-color: orange;" class="bt-node asright childnode1">5</div>
                                    </li>
                                </ul>
                            </li>
                            <li style="position: relative; left: 5px;" class="hight">
                                <div style="background-color: orange;" class="bt-node bssubtree childnode1 parentnode1">3</div>
                                <ul  class="ul hight">
                                    <li style="position: relative; left: 5px;" class="li">
                                        <div style="background-color: orange;" class="bt-node bssubtree childnode1">6</div>
                                    </li>
                                    <li style="position: relative; left: 5px;" class="ul hight">
                                        <div style="background-color: orange;" class="bt-node bssubtree childnode1 parentnode1">7</div>
                                        <ul  class="ul hight">
                                            <li>
                                                <div style="background-color: orange;" class="bt-node bssubtree childnode1">8</div>
                                            </li>
                                        </ul>    
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>`

    let html11 = `<ul>
                    <li>
                        <div style="opacity: .2;" class="bt-node bt-rootNode parentnode1">1</div>
                        <ul class="hight">
                            <li style="position: relative; left: 5px;">
                                <div style="opacity: .2;"class="bt-node childnode1 parentnode1">2</div>
                                <ul>
                                    <li>
                                        <div style="opacity: .2;" class="bt-node asleft childnode1 ">4</div>
                                    </li>
                                    <li>
                                        <div style="opacity: .2;" class="bt-node asright childnode1">5</div>
                                    </li>
                                </ul>
                            </li>
                            <li style="position: relative; left: 5px;" class="hight">
                                <div style="opacity: .2;" class="bt-node bssubtree childnode1 parentnode1">3</div>
                                <ul  class="ul hight">
                                    <li style="position: relative; left: 5px;" class="li">
                                        <div style="opacity: .2;" class="bt-node bssubtree childnode1">6</div>
                                    </li>
                                    <li style="position: relative; left: 5px;" class="ul hight">
                                        <div style="opacity: .2;" class="bt-node bssubtree childnode1 parentnode1">7</div>
                                        <ul  class="ul hight">
                                            <li>
                                                <div style="opacity: .2;" class="bt-node bssubtree childnode1">8</div>
                                            </li>
                                        </ul>    
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>`


    const selectedOption1 = event.target.value;


    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 100);
    })


    if (selectedOption1 === 'binaryTree') {
        document.getElementById('binary-tree').innerHTML = html1
        const elements = document.querySelectorAll('.bt-node');

        elements.forEach(element => {
            element.style.backgroundColor = 'orange';
        });
    }else if(selectedOption1 === 'bt-rootNode'){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.bt-rootNode').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }else if(selectedOption1 === 'asleft'){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.asleft').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }else if(selectedOption1 === 'asright'){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.asright').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }else if(selectedOption1 === 'bssubtree'){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.bssubtree').forEach((ele) => {
            ele.style.opacity = '1'
        })

         // make arrow less opactiy
         const treeItems = document.querySelectorAll('.bt-tree .ul');
         treeItems.forEach(item => {
             item.style.setProperty('--border-color', 'black');
             item.classList.add('custom-colorrr');
         });
 
         // make arrow less opactiy
         const treeItems1 = document.querySelectorAll('.bt-tree .li');
         treeItems1.forEach(item => {
             item.style.setProperty('--border-color', 'black');
             item.classList.add('custom-colorrr');
         });
    }else if(selectedOption1 === "bt-node"){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.bt-node').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }else if(selectedOption1 === 'btreeheight'){
        setNodes1(html11, selectedOption1)
        // make arrow less opactiy
        const treeItems = document.querySelectorAll('.bt-tree .hight');
        treeItems.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-colorrrr');
        });

        // make arrow less opactiy
        const treeItems1 = document.querySelectorAll('.bt-tree .hight');
        treeItems1.forEach(item => {
            item.style.setProperty('--border-color', 'black');
            item.classList.add('custom-colorrrr');
        });
    }else if(selectedOption1 === 'childnode1'){
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.childnode1').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }else{
        setNodes1(html11, selectedOption1)
        document.querySelectorAll('.parentnode1').forEach((ele) => {
            ele.style.opacity = '1'
        })
    }



}

function setNodes1(html, selectedOption) {


    document.getElementById('binary-tree').innerHTML = html

    // make arrow less opactiy
    const treeItems = document.querySelectorAll('.bt-tree li');
    treeItems.forEach(item => {
        item.style.setProperty('--border-color', 'black');
        item.classList.add('custom-color1');
    });

    // make arrow less opactiy
    const treeItems1 = document.querySelectorAll('.bt-tree ul');
    treeItems1.forEach(item => {
        item.style.setProperty('--border-color', 'black');
        item.classList.add('custom-color1');
    });

    if (selectedOption) {
        const elements = document.querySelectorAll(`.${selectedOption}`);
        console.log(elements)

        elements.forEach(element => {
            element.style.backgroundColor = 'orange';
        });
    }

}
