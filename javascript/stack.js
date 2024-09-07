function loadArrayPage() {

    // localStorage.clear()

    let withArray_div = document.getElementById('stack_with_array')
    let withQueue_div = document.getElementById('stack_with_queue')
    let withLL_div = document.getElementById('stack_with_ll')

    withArray_div.style.display = 'none'
    // withQueue_div.style.display = 'none'
    // withLL_div.style.display = 'none'
    // set operations
    let which = localStorage.getItem('which')


    if (which) {
        if (which === 'witharray') {
            withArray_div.style.display = 'block'
            withQueue_div.style.display = 'none'
            // withLL_div.style.display = 'none'
        } else if (which === 'withqueue') {
            withQueue_div.style.display = 'block'
            withArray_div.style.display = 'none'
            // withLL_div.style.display = 'none'
        } else {
            // withLL_div.style.display = 'block'
            withQueue_div.style.display = 'none'
            withArray_div.style.display = 'none'
        }
    } else {
        withArray_div.style.display = 'block'
        // withLL_div.style.display = 'block'
        withQueue_div.style.display = 'none'
    }

    // generate array
    let array = generateRandomArray(2)

    let htmlBox = ''
    array.forEach((val, index) => {

        htmlBox +=
            ` <div id="${index}" class="index">
        ${val}
      </div>`

    })

    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="box${index}" class="ind">
            ${index}
        </div>`
    })

    // array box
    document.getElementById('array_box').innerHTML = htmlBox
    document.getElementById('array_box').style.width = '121.2px'

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
    document.getElementById('array_index').style.width = '121.2px'


    //same like that i wana genreate stack also-----------------------------------------


    let stackBox = ''
    array.reverse().forEach((val, index) => {

        stackBox +=
            ` <div id="stack${index}" class="stack">
        ${val}
      </div>`

    })


    // stack box
    document.getElementById('stack_box').innerHTML = stackBox
    document.getElementById('stack_box').style.height = '122.7px'



    // stack with queue part array generate

    // generate array
    let array1 = generateRandomArray(2)

    let htmlBox1 = ''
    array1.forEach((val, index) => {

        htmlBox1 +=
            ` <div id="array_stack_${index}" class="with_queue_index">
         ${val}
       </div>`

    })

    let htmlIndex1 = ''
    array1.forEach((val, index) => {
        htmlIndex1 +=
            ` <div id="stackbox${index}" class="with_queue_ind">
             ${index}
         </div>`
    })

    // array box
    document.getElementById('array_box_queue').innerHTML = htmlBox1
    document.getElementById('array_box_queue').style.width = '121.2px'

    // array index
    document.getElementById('array_index_queue').innerHTML = htmlIndex1
    document.getElementById('array_index_queue').style.width = '121.2px'


    //same like that i wana genreate stack also-----------------------------------------


    let stackBox1 = ''
    array1.reverse().forEach((val, index) => {

        stackBox1 +=
            ` <div id="queue_stack${index}" class="stack">
         ${val}
       </div>`

    })


    // stack box
    document.getElementById('stack_box_queue').innerHTML = stackBox1
    document.getElementById('stack_box_queue').style.height = '122.7px'

}

function generateRandomArray(size) {

    let randomArray = [];

    for (let i = 0; i < size; i++) {
        // Generate a random number between 10 and 100
        let randomNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        randomArray.push(randomNum);
    }
    return randomArray;
}

let width = 121.2
let stackWidth = 122.7


// peek
function findPeek(event){

    event.preventDefault()
    disableBtns()

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let intervel = setInterval(() => {
        let box = document.getElementById(`${array.length - 1}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'chocolate'
            document.getElementById(`stack${0}`).style.backgroundColor = 'chocolate'
            // document.getElementById('in').style.color = 'green'
        }
        else {
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`stack${0}`).style.backgroundColor = 'rgb(247, 128, 43)'
            // document.getElementById('in').style.color = 'black'
        }
    }, 100);

    setTimeout(()=>{
        clearInterval(intervel)
        enableBtns()
        document.getElementById(`${array.length - 1}`).style.backgroundColor = ''
        document.getElementById(`stack${0}`).style.backgroundColor = ''
    },1200)
}


// push

function insertAtLast(event) {
    event.preventDefault()

    disableBtns()

    if (!localStorage.getItem('gaveExplanation')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = `
<p style="font-size:16px;">Stack has only one end and it is called top. So when we add a value to stack or remove a value from stack that will takes place only at the top of the stack.</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=pushValue()>ok</button> 
`
        localStorage.setItem('gaveExplanation', true)

    } else {
        pushValue()
    }

}


function pushValue() {


    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'

    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = document.getElementById('insertedValue').value

    if (Number(val) > 100 || Number(val) < -100) {
        alert("enter number less than 100 and greater than 10")

        enableBtns()

        return
    }

    if (array.length === 7) {
        alert("Can't add anymore")

        enableBtns()

        return
    }

    // push value to array
    array.push(Number(val))

    // make html from array
    let htmlBox = ''
    array.forEach((val, index) => {
        if (index === array.length - 1) {
            htmlBox +=
                ` <div id="${index}" style="background-color:rgb(247, 128, 43);" class="index">
                 
              </div>`
        } else {
            htmlBox +=
                ` <div id="${index}" class="index">
            ${val}
          </div>`
        }
    })

    // // array box
    // document.getElementById('array_box').innerHTML = htmlBox

    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`${array.length - 1}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'chocolate'
            document.getElementById(`stack${0}`).style.backgroundColor = 'chocolate'
            document.getElementById('in').style.color = 'green'
        }
        else {
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`stack${0}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById('in').style.color = 'black'
        }
    }, 100);

    // make index values from array
    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="box${index}" class="ind">
                ${index}
            </div>`
    })

    setTimeout(() => {
        document.getElementById(`${array.length - 1}`).innerHTML = val
        document.getElementById(`stack${0}`).innerHTML = val
        clearInterval(intervel);

        document.getElementById(`${array.length - 1}`).style.backgroundColor = ''
        document.getElementById(`stack${0}`).style.backgroundColor = ''
        document.getElementById('in').style.color = ''

        enableBtns()

    }, 1000);

    if (array.length === 7) {
        width = 417
    }

    if (array.length === 6) {
        width = 357.75
    }

    if (array.length === 5) {
        width = 298.5
    }

    if (array.length === 4) {
        width = 239.25
    }

    if (array.length === 3) {
        width = 180.6
    }

    if (array.length === 2) {
        width = 121.2
    }

    if (array.length === 1) {
        width = 61.2
    }

    // array box
    document.getElementById('array_box').innerHTML = htmlBox
    document.getElementById('array_box').style.width = `${width}px`

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
    document.getElementById('array_index').style.width = `${width}px`

    width = width - 0.75



    // insert into stack also-----------------------------------------------------


    stackWidth = stackWidth + 50

    let stackBox = ''
    array.reverse().forEach((val, index) => {

        if (index === 0) {
            stackBox +=
                ` <div id="stack${index}" style="height: 60px;" class="stack">
            <p style="visibility:hidden;">?</p>
       </div>`
        } else {
            stackBox +=
                ` <div id="stack${index}" class="stack">
         ${val}
       </div>`
        }

    })

    stackWidth = stackWidth + 9.95


    // stack box
    document.getElementById('stack_box').innerHTML = stackBox
    document.getElementById('stack_box').style.height = `${stackWidth}px`
}


// pop 

function removeValue(event) {

    event.preventDefault()

    disableBtns()

    // make array from html
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    if (array.length < 3) {
        alert('can\'t remove anymore')

        enableBtns()

        return
    }

    if (!localStorage.getItem('gaveExplanation1')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = `
<p style="font-size:16px;">Stack has only one end and it is called top. So when we add a value to stack or remove a value from stack that will takes place only at the top of the stack.</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=popValue()>ok</button> 
`
        localStorage.setItem('gaveExplanation1', true)

    } else {
        popValue()
    }
}

function popValue() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'

    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ""

    // make array from html
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    if (array.length < 3) {
        alert('can\'t remove anymore')

        enableBtns()

        return
    }


    // let val = document.getElementById('number').value
    let val = array[array.length - 1]
    let index = array.length - 1;


    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`${index}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`${index}`).style.backgroundColor = 'chocolate'
            document.getElementById(`stack${0}`).style.backgroundColor = 'chocolate'
            document.getElementById('out').style.color = 'red'
        }
        else {
            document.getElementById(`${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`stack${0}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById('out').style.color = 'black'
        }

    }, 100);

    // replace each value from left to right
    setTimeout(() => {
        clearInterval(intervel);
        let box = document.getElementById(`${index}`)
        // box.style.width = '57px'
        box.innerHTML = ''
        box.style.backgroundColor = ''
        document.getElementById('out').style.color = ''
        // document.getElementById(`${index+1}`).style.backgroundColor = 'rgb(247, 128, 43)'
        let time = 0;
        for (let i = index; i < array.length - 1; i++) {
            if (i === array.length - 2) {
                setTimeout(() => {
                    document.getElementById(`${i}`).style.backgroundColor = ''

                    // stack
                    document.getElementById(`stack${0}`).style.backgroundColor = ''

                }, time * 1000);
            } else {
                setTimeout(() => {

                    document.getElementById(`${i}`).style.backgroundColor = ''

                    // stack
                    document.getElementById(`stack${0}`).style.backgroundColor = ''

                }, time * 1000);
                time++
            }
        }
    }, 1000);

    // do this operation on array and make html from array
    setTimeout(() => {

        let j = 0
        for (let i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1]
        }

        array.length = array.length - 1

        let htmlBox = ''
        array.forEach((val, index) => {

            htmlBox +=
                ` <div id="${index}" class="index">
            ${val}
          </div>`

        })

        let htmlIndex = ''
        array.forEach((val, index) => {
            htmlIndex +=
                ` <div id="box${index}" class="ind">
                ${index}
            </div>`
        })

        if (array.length === 7) {
            width = 417
        }

        if (array.length === 6) {
            width = 357.75
        }

        if (array.length === 5) {
            width = 298.5
        }

        if (array.length === 4) {
            width = 239.25
        }

        if (array.length === 3) {
            width = 180.6
        }

        if (array.length === 2) {
            width = 121.2
        }

        if (array.length === 1) {
            width = 61.2
        }
        if (array.length === 2) {
            width = 121.2
        }

        // array box
        document.getElementById('array_box').innerHTML = htmlBox
        document.getElementById('array_box').style.width = `${width}px`

        // array index
        document.getElementById('array_index').innerHTML = htmlIndex
        document.getElementById('array_index').style.width = `${width}px`


        // remove from stack box also-------------------------------------------------------------

        stackWidth = stackWidth - 50

        let stackBox = ''
        array.reverse().forEach((val, index) => {

            stackBox +=
                ` <div id="stack${index}" class="stack">
         ${val}
       </div>`

        })

        stackWidth = stackWidth - 9.95


        // array box
        document.getElementById('stack_box').innerHTML = stackBox
        document.getElementById('stack_box').style.height = `${stackWidth}px`


        enableBtns()



    }, (array.length - index) * 1000)
}


function disableBtns() {
    // disable button
    document.getElementById('insertAtLastBtn').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('removeBtn').setAttribute('disabled', 'disabled')
}

function enableBtns() {
    // enable button
    document.getElementById('insertAtLastBtn').removeAttribute('disabled')
    // enable button
    document.getElementById('removeBtn').removeAttribute('disabled')
}