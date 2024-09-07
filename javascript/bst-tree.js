// pre order
function PreOrder(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
       <p style="font-size:16px;font-weight:bold">Pre Order</p>
<p style="font-size:16px;margin-bottom:0px;">1. Visit root node</p>
<p style="font-size:16px;margin-bottom:0px;">2. Visit left substree</p>
<p style="font-size:16px;">3. Visit right subtree</p>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=startPreOrder()>ok</button> 
`
}

// start preOrder
function startPreOrder() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''


    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let order = document.getElementById('order')
    order.innerHTML = 'Pre Order'
    let note_pad1 = document.getElementById('note_pad1')

    let arr = ['10', '5', '3', '7', '15', '12', '20', '18']

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
            note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `

        }, (i + 1) * 1000)
    }

    setTimeout(() => {

        for (let i = 0; i < arr.length; i++) {
            document.getElementById(`${arr[i]}`).style.backgroundColor = 'orange'
        }

        enableBtns()
        let note_pad_div1 = document.getElementById('note_pad_div1')
        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.getElementsByTagName('p')[1].innerHTML = `Result : `
        note_pad_div1.style.display = 'none'

    }, (arr.length + 2) * 1000);
}





// IN Order
function InOrder(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
       <p style="font-size:16px;font-weight:bold">In Order</p>
<p style="font-size:16px;margin-bottom:0px;">1. Visit left subtree</p>
<p style="font-size:16px;margin-bottom:0px;">2. Visit root node</p>
<p style="font-size:16px;">3. Visit right subtree</p>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=startInOrder()>ok</button> 
`

}

// start in order
function startInOrder() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''


    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let order = document.getElementById('order')
    order.innerHTML = 'In Order'
    let note_pad1 = document.getElementById('note_pad1')

    let arr = ['ten', 'five', '3', '5', '7', '10', 'fifteen', '12', '15', 'twenty', '18', '20']

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            if (document.getElementById(`${arr[i]}`)) {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else {
                if (arr[i] === 'ten') {
                    document.getElementById('10').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'five') {
                    document.getElementById('5').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'fifteen') {
                    document.getElementById('15').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'twenty') {
                    document.getElementById('20').style.backgroundColor = 'rgb(220, 20, 60)'
                }
            }

        }, i * 1000)
    }

    setTimeout(() => {

        for (let i = 0; i < arr.length; i++) {
            if (document.getElementById(`${arr[i]}`))
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'orange'
        }

        enableBtns()
        let note_pad_div1 = document.getElementById('note_pad_div1')
        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.getElementsByTagName('p')[1].innerHTML = `Result : `
        note_pad_div1.style.display = 'none'

    }, (arr.length + 1) * 1000);
}





// post order

function PostOrder(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;font-weight:bold">Post Order</p>
<p style="font-size:16px;margin-bottom:0px;">1. Visit left subtree</p>
<p style="font-size:16px;margin-bottom:0px;">2. Visit right node</p>
<p style="font-size:16px;">3. Visit root subtree</p>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=startPostOrder()>ok</button> 
`

}

// start post order

function startPostOrder() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''


    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let order = document.getElementById('order')
    order.innerHTML = 'Post Order'
    let note_pad1 = document.getElementById('note_pad1')


    let arr = ['ten', 'five', '3', '7', '5', 'fifteen', '12', 'twenty', '18', '20', '15', '10']

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            if (document.getElementById(`${arr[i]}`)) {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else {
                if (arr[i] === 'ten') {
                    document.getElementById('10').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'five') {
                    document.getElementById('5').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'fifteen') {
                    document.getElementById('15').style.backgroundColor = 'rgb(220, 20, 60)'
                } else if (arr[i] === 'twenty') {
                    document.getElementById('20').style.backgroundColor = 'rgb(220, 20, 60)'
                }
            }

        }, i * 1000)
    }

    setTimeout(() => {

        for (let i = 0; i < arr.length; i++) {
            if (document.getElementById(`${arr[i]}`))
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'orange'
        }

        enableBtns()
        let note_pad_div1 = document.getElementById('note_pad_div1')
        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.getElementsByTagName('p')[1].innerHTML = `Result : `
        note_pad_div1.style.display = 'none'

    }, (arr.length + 1) * 1000);
}





// BFS 

function BFS(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;font-weight:bold">Post Order</p>
<p style="font-size:16px;">It's level by level traversal.</p>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=startBFS()>ok</button> 
`

}

// start bfs

function startBFS() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''


    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let order = document.getElementById('order')
    order.innerHTML = 'Post Order'
    let note_pad1 = document.getElementById('note_pad1')


    let arr = ['10', '5', '15', '3', '7', '12', '20', '18']

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            if (arr[i] == '10') {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                document.getElementById(`${5}`).style.backgroundColor = 'rgb(220, 20, 60)'
                document.getElementById(`${15}`).style.backgroundColor = 'rgb(220, 20, 60)'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else if (arr[i] == '5') {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                document.getElementById(`${3}`).style.backgroundColor = 'rgb(220, 20, 60)'
                document.getElementById(`${7}`).style.backgroundColor = 'rgb(220, 20, 60)'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else if (arr[i] == '15') {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                document.getElementById(`${12}`).style.backgroundColor = 'rgb(220, 20, 60)'
                document.getElementById(`${20}`).style.backgroundColor = 'rgb(220, 20, 60)'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else if (arr[i] == '20') {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                document.getElementById(`${18}`).style.backgroundColor = 'rgb(220, 20, 60)'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            } else {
                document.getElementById(`${arr[i]}`).style.backgroundColor = 'green'
                note_pad1.getElementsByTagName('p')[1].innerHTML += `${arr[i]}, `
            }

        }, (i + 1) * 1000)
    }

    setTimeout(() => {

        for (let i = 0; i < arr.length; i++) {
            document.getElementById(`${arr[i]}`).style.backgroundColor = 'orange'
        }

        enableBtns()
        let note_pad_div1 = document.getElementById('note_pad_div1')
        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.getElementsByTagName('p')[1].innerHTML = `Result : `
        note_pad_div1.style.display = 'none'

    }, (arr.length + 1) * 1000);
}




// get basic operations

function getbasicOperations() {

    let basic_div = document.getElementById('basic_div_')

    if (basic_div.style.display === 'block')
        return

    basic_div.style.display = 'block'

    document.getElementById('binary-search-tree1').style.display = 'block'
    document.getElementById('binary-search-tree').style.display = 'none'

    let traversal_div = document.getElementById('traversal_div_')
    traversal_div.style.display = 'none'

    document.getElementById('basic_op').getElementsByTagName('i')[0].classList.remove('fa-caret-right')
    document.getElementById('basic_op').getElementsByTagName('i')[0].classList.add('fa-caret-down')


    document.getElementById('traversal_op').getElementsByTagName('i')[0].classList.remove('fa-caret-down')
    document.getElementById('traversal_op').getElementsByTagName('i')[0].classList.add('fa-caret-right')
    document.getElementById('traversal_op').style.paddingLeft = '0px'

}

// get traversal operations

function getTraversOperations() {

    let traversal_div = document.getElementById('traversal_div_')
    if (traversal_div.style.display === 'block')
        return

    document.getElementById('binary-search-tree1').style.display = 'none'
    document.getElementById('binary-search-tree').style.display = 'block'

    traversal_div.style.display = 'block'

    let basic_div = document.getElementById('basic_div_')
    basic_div.style.display = 'none'

    document.getElementById('basic_op').getElementsByTagName('i')[0].classList.remove('fa-caret-down')
    document.getElementById('basic_op').getElementsByTagName('i')[0].classList.add('fa-caret-right')


    document.getElementById('traversal_op').getElementsByTagName('i')[0].classList.remove('fa-caret-right')
    document.getElementById('traversal_op').getElementsByTagName('i')[0].classList.add('fa-caret-down')
    document.getElementById('traversal_op').style.paddingLeft = '10px'

}



// insert value to bst
function insertValue(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;font-weight:bold">Insert Value</p>
    <form onsubmit="startInsert(event)">
    <div class='radios' style="font-size:16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;position:relative;left:-25px">
        <input type="radio"  id="value20" name="optionss" value="20" required>
        <label for="value20">20</label>
      
    </div>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;">ok</button> 
</form>
`


}

// startinserting
function startInsert(event) {

    event.preventDefault()

    const selectedValue = document.querySelector('input[name="optionss"]:checked').value;

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''


    let arr = []
    if (selectedValue === '20') {
        arr = ['10', '15'];
    }

    startchecking(arr, selectedValue)

}

// startch checking
function startchecking(arr, value) {

    let note_pad_div = document.getElementById('note_pad_div1')
    note_pad_div.style.display = 'block'
    let note_pad = document.getElementById('note_pad1')
    note_pad.getElementsByTagName('p')[0].style.display = 'none'
    note_pad.getElementsByTagName('p')[1].innerHTML = ''


    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            document.getElementById(`${arr[i]}-`).style.backgroundColor = 'rgb(220, 20, 60)'
            note_pad.getElementsByTagName('p')[1].innerHTML = `20 is greater than ${arr[i]}`

        }, i * 1000)
    }

    setTimeout(() => {

        document.getElementById(`${20}-`).style.visibility = 'visible'

        let note_pad_div = document.getElementById('note_pad_div1')
        let note_pad = document.getElementById('note_pad1')
        note_pad.getElementsByTagName('p')[0].style.display = 'block'
        note_pad.getElementsByTagName('p')[1].innerHTML = 'Result : '
        note_pad_div.style.display = 'none'

    }, (arr.length + 0.2) * 1000);

    setTimeout(() => {

        makeTree('20')

    }, (arr.length + 1.5) * 1000);

    setTimeout(() => {

        makeTree('1')
        enableBtns()

    }, (arr.length + 3) * 1000);
}



// search value
function Search(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;font-weight:bold">Search Value</p>
    <form onsubmit="startSearch(event)">
    <div class='radios' style="font-size:16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;position:relative;left:-25px">
        <input type="radio"  id="value7" name="optionss" value="7" required>
        <label for="value7">7</label>
      
    </div>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;">ok</button> 
</form>
`

}

// start search
function startSearch(event) {
    event.preventDefault()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''

    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.getElementsByTagName('p')[0].style.display = 'none'
    note_pad1.getElementsByTagName('p')[1].innerHTML = ''


    let arr = ['10', '5', '7']

    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {

            document.getElementById(`${arr[i]}-`).style.backgroundColor = 'rgb(220, 20, 60)'
            if (arr[i] === '10') {
                note_pad1.getElementsByTagName('p')[1].innerHTML = `7 is less than ${arr[i]}`
            } else if (arr[i] === '5') {
                note_pad1.getElementsByTagName('p')[1].innerHTML = `7 is greater than ${arr[i]}`
            }

        }, i * 1000)
    }

    setTimeout(() => {
        document.getElementById(`${7}-`).style.backgroundColor = 'green'
        note_pad1.getElementsByTagName('p')[1].innerHTML = `Found 7`
    }, 3000);

    setTimeout(() => {

        for (let i = 0; i < arr.length; i++) {
            document.getElementById(`${arr[i]}-`).style.backgroundColor = 'orange'
        }
        enableBtns()
        let note_pad_div1 = document.getElementById('note_pad_div1')
        note_pad_div1.style.display = 'none'
        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.getElementsByTagName('p')[0].style.display = 'block'
        note_pad1.getElementsByTagName('p')[1].innerHTML = 'Result : '

    }, 5 * 1000);
}




// delete values from tree

function Delete(event) {

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    // explanation
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;font-weight:bold">Delete Value</p>
    <form onsubmit="startDelete(event)">
    <div class='radios' style="font-size:16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;position:relative;left:-25px">
        <input type="radio"  id="value10" name="optionss" value="10" required>
        <label for="value10">10</label>

        <br>

        <input type="radio"  id="value7" name="optionss" value="7" required>
        <label for="value7">7</label>
      
    </div>
<button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;">ok</button> 
</form>
`
}


// start delete values
function startDelete(event) {

    event.preventDefault()

    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'
    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.getElementsByTagName('p')[0].style.display = 'none'
    note_pad1.getElementsByTagName('p')[1].innerHTML = ''

    const selectedValue = document.querySelector('input[name="optionss"]:checked').value;

    if (selectedValue === '7') {

        let arr = ['10', '5', '7']

        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {

                document.getElementById(`${arr[i]}-`).style.backgroundColor = 'rgb(220, 20, 60)'
                if (arr[i] === '10') {
                    note_pad1.getElementsByTagName('p')[1].innerHTML = `7 is less than ${arr[i]}`
                } else if (arr[i] === '5') {
                    note_pad1.getElementsByTagName('p')[1].innerHTML = `7 is greater than ${arr[i]}`
                }

            }, i * 1000)
        }

        setTimeout(() => {
            document.getElementById(`${7}-`).style.backgroundColor = 'green'
            note_pad1.getElementsByTagName('p')[1].innerHTML = `Delete 7`
        }, 3000);

        setTimeout(() => {

            makeTree('7')

            let note_pad_div1 = document.getElementById('note_pad_div1')
            note_pad_div1.style.display = 'none'
            let note_pad1 = document.getElementById('note_pad1')
            note_pad1.getElementsByTagName('p')[0].style.display = 'block'
            note_pad1.getElementsByTagName('p')[1].innerHTML = 'Result : '
    
        }, 4 * 1000);

        setTimeout(() => {

            enableBtns()
            makeTree('1')
            
        }, 6000);


    }else{

         note_pad1.getElementsByTagName('p')[1].innerHTML = 'Delete 10'

        document.getElementById('10-').style.backgroundColor = 'green'

        let arr = ['15', '12']

        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {

                document.getElementById(`${arr[i]}-`).style.backgroundColor = 'rgb(220, 20, 60)'
                if (arr[i] === '15') {
                    note_pad1.getElementsByTagName('p')[1].innerHTML = `Right subtree`
                } else if (arr[i] === '12') {
                    document.getElementById(`${15}-`).style.backgroundColor = 'orange'
                    note_pad1.getElementsByTagName('p')[1].innerHTML = `12 is smaller in right subtree`
                }

            }, (i + 1) * 1000)
        }

        setTimeout(() => {

            note_pad1.getElementsByTagName('p')[1].innerHTML = `Swap 12 to 10`

            document.getElementById('10-').innerHTML='12'
            
        }, 3500);

        setTimeout(() => {

            note_pad1.getElementsByTagName('p')[1].innerHTML = `And delete 12`


        }, 4500);

        setTimeout(() => {

            makeTree('10')
            let note_pad_div1 = document.getElementById('note_pad_div1')
            note_pad_div1.style.display = 'none'
            let note_pad1 = document.getElementById('note_pad1')
            note_pad1.getElementsByTagName('p')[0].style.display = 'block'
            note_pad1.getElementsByTagName('p')[1].innerHTML = 'Result : '
            
        }, 5500);

        setTimeout(() => {

            makeTree('1')
            enableBtns()
            
        }, 8000);


    }

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''

}


function makeTree(value) {

    // alert(value)

    let html;
    if (value === '20') {

        html = ` <ul>
                    <li>
                        <div style="background-color: orange;" id="10-" class="bst-node">10</div>
                        <ul class="hight">
                            <li style="position: relative; left: -15px;">
                                <div style="background-color: orange;" id="5-" class="bst-node">5</div>
                                <ul>
                                    <li style="position: relative; left: -13px;">
                                        <div style="background-color: orange;" id="3-" class="bst-node">3</div>
                                    </li>
                                    <li id="seven">
                                        <div style="background-color: orange;" id="7-" class="bst-node">7
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li style="position: relative; left: -15px;" class="hight">
                                <div style="background-color: orange;" id="15-" class="bst-node">
                                    15</div>
                                <ul class="ul hight">
                                    <li style="position: relative; left: -14px;" id="twelve" class="li">
                                        <div style="background-color: orange;" id="12-" class="bst-node">
                                            12
                                        </div>
                                    </li>
                                    <li style="position: relative; left: -14px; visibility: visible;" class="li">
                                        <div style="background-color: orange;" id="20-" class="bst-node">
                                            20
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>`

    } else if(value==='7'){
        html = ` <ul>
        <li>
            <div style="background-color: orange;" id="10-" class="bst-node">10</div>
            <ul class="hight">
                <li style="position: relative; left: -15px;">
                    <div style="background-color: orange;" id="5-" class="bst-node">5</div>
                    <ul>
                        <li style="position: relative; left: -13px;">
                            <div style="background-color: orange;" id="3-" class="bst-node">3</div>
                        </li>
                        <li style="visibility: hidden;">
                            <div style="background-color: orange;" id="7-" class="bst-node">7
                            </div>
                        </li>
                    </ul>
                </li>
                <li style="position: relative; left: -15px;" class="hight">
                    <div style="background-color: orange;" id="15-" class="bst-node">
                        15</div>
                    <ul class="ul hight">
                        <li style="position: relative; left: -14px;" class="li">
                            <div style="background-color: orange;" id="12-" class="bst-node">
                                12
                            </div>
                        </li>
                       <li style="position: relative; left: -14px; visibility: hidden;" id="20-" class="li">
                            <div style="background-color: rgb(220, 20, 60);" class="bst-node">
                              20
                           </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>`
    }else if(value==='10'){
        html = ` <ul>
        <li>
            <div style="background-color: orange;" id="10-" class="bst-node">12</div>
            <ul class="hight">
                <li style="position: relative; left: -15px;">
                    <div style="background-color: orange;" id="5-" class="bst-node">5</div>
                    <ul>
                        <li style="position: relative; left: -13px;">
                            <div style="background-color: orange;" id="3-" class="bst-node">3</div>
                        </li>
                        <li>
                            <div style="background-color: orange;" id="7-" class="bst-node">7
                            </div>
                        </li>
                    </ul>
                </li>
                <li style="position: relative; left: -15px;" class="hight">
                    <div style="background-color: orange;" id="15-" class="bst-node">
                        15</div>
                    <ul style="visibility: hidden;" class="ul hight">
                        <li style="position: relative; left: -14px; class="li">
                            <div style="background-color: orange;" id="12-" class="bst-node">
                                12
                            </div>
                        </li>
                       <li style="position: relative; left: -14px; visibility: hidden;" id="20-" class="li">
                            <div style="background-color: rgb(220, 20, 60);" class="bst-node">
                              20
                           </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>`
    }
     else {

        html = ` <ul>
        <li>
            <div style="background-color: orange;" id="10-" class="bst-node">10</div>
            <ul class="hight">
                <li style="position: relative; left: -15px;">
                    <div style="background-color: orange;" id="5-" class="bst-node">5</div>
                    <ul>
                        <li style="position: relative; left: -13px;">
                            <div style="background-color: orange;" id="3-" class="bst-node">3</div>
                        </li>
                        <li id="seven">
                            <div style="background-color: orange;" id="7-" class="bst-node">7
                            </div>
                        </li>
                    </ul>
                </li>
                <li style="position: relative; left: -15px;" class="hight">
                    <div style="background-color: orange;" id="15-" class="bst-node">
                        15</div>
                    <ul class="ul hight">
                        <li style="position: relative; left: -14px;" class="li" id="twelve">
                            <div style="background-color: orange;" id="12-" class="bst-node">
                                12
                            </div>
                        </li>
                       <li style="position: relative; left: -14px; visibility: hidden;" id="20-" class="li">
                            <div style="background-color: rgb(220, 20, 60);" class="bst-node">
                              20
                           </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>`


    }

    document.getElementById('binary-search-tree1').innerHTML = html

}



function disableBtns() {
    // disable button
    document.getElementById('pre').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('in').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('post').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('bfs').setAttribute('disabled', 'disabled')

    document.getElementById('basic_op').setAttribute('disabled', 'disabled')

    document.getElementById('traversal_op').setAttribute('disabled', 'disabled')


    document.getElementById('insert').setAttribute('disabled', 'disabled')

    document.getElementById('search').setAttribute('disabled', 'disabled')

    document.getElementById('delete').setAttribute('disabled', 'disabled')
}

function enableBtns() {
    // enable button
    document.getElementById('pre').removeAttribute('disabled')
    // enable button
    document.getElementById('in').removeAttribute('disabled')
    // enable button
    document.getElementById('post').removeAttribute('disabled')
    // enable button
    document.getElementById('bfs').removeAttribute('disabled')

    document.getElementById('basic_op').removeAttribute('disabled')

    document.getElementById('traversal_op').removeAttribute('disabled')

    document.getElementById('insert').removeAttribute('disabled')

    document.getElementById('search').removeAttribute('disabled')

    document.getElementById('delete').removeAttribute('disabled')
}
