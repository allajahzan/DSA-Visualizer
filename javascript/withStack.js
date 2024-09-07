
let newWidth = 120
let newStackWidth = 122.7
let queue1 = []

// push

function insertAtLast_with_queue(event) {
    event.preventDefault()

    disableBtns1()

    // ṃake array from html 
    const divs = document.querySelectorAll('.with_queue_index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    if(queue1.length===0){
        for (let i = 0; i < totalDivs; i++) {
            queue1.push(Number(divs[i].innerText))
        }
    }

    let val = document.getElementById('insertedValue_queue').value

    if (Number(val) > 100 || Number(val) < -100) {
        alert("enter number less than 100 and greater than 10")

        enableBtns1()

        return
    }


    if (array.length === 7) {
        alert("Can't add anymore")

        enableBtns1()

        return
    }

    queue1.push(Number(val))
    
    // push value to array
    array.push(Number(val))

    // make html from array
    let htmlBox = ''
    array.forEach((val, index) => {
        if (index === array.length - 1) {
            htmlBox +=
                ` <div id="array_stack_${index}" style="background-color:rgb(247, 128, 43);" class="with_queue_index">
                 
              </div>`
        } else {
            htmlBox +=
                ` <div id="array_stack_${index}" class="with_queue_index">
            ${val}
          </div>`
        }
    })


    // // array box
    // document.getElementById('array_box').innerHTML = htmlBox

    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`array_stack_${array.length - 1}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`array_stack_${array.length - 1}`).style.backgroundColor = 'chocolate'
            document.getElementById(`queue_stack${array.length - 1}`).style.backgroundColor = 'chocolate'
            document.getElementById('in_with_queue').style.color = 'green'
        }
        else {
            document.getElementById(`array_stack_${array.length - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`queue_stack${array.length - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById('in_with_queue').style.color = 'black'
        }
    }, 100);

    // make index values from array
    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="stackbox${index}" class="with_queue_ind">
                ${index}
            </div>`
    })

    setTimeout(() => {
        document.getElementById(`array_stack_${array.length - 1}`).innerHTML = val
        document.getElementById(`queue_stack${array.length - 1}`).innerHTML = val
        clearInterval(intervel);

        document.getElementById(`array_stack_${array.length - 1}`).style.backgroundColor = ''
        document.getElementById(`queue_stack${array.length - 1}`).style.backgroundColor = ''
        document.getElementById('in_with_queue').style.color = ''

        enableBtns1()

    }, 1000);

    newWidth = newWidth + 60

    // array box
    document.getElementById('array_box_queue').innerHTML = htmlBox
    document.getElementById('array_box_queue').style.width = `${newWidth}px`

    // array index
    document.getElementById('array_index_queue').innerHTML = htmlIndex
    document.getElementById('array_index_queue').style.width = `${newWidth}px`

    newWidth = newWidth - 0.75



    // insert into stack also-----------------------------------------------------


    newStackWidth = newStackWidth + 50

    let stackBox = ''
    array.forEach((val, index) => {

        if (index === array.length-1) {
            stackBox +=
                ` <div id="queue_stack${index}" style="height: 60px;" class="stack">
            <p style="visibility:hidden;">?</p>
       </div>`
        } else {

            stackBox +=
                ` <div id="queue_stack${index}" class="stack">
         ${val}
       </div>`
        }

    })

    newStackWidth = newStackWidth + 9.95

    // stack box
    document.getElementById('stack_box_queue').innerHTML = stackBox
    document.getElementById('stack_box_queue').style.height = `${newStackWidth}px`

}


// pop 

function removeValue_with_queue(event) {

    event.preventDefault()

    disableBtns1()

    if(queue1.length<3){
        alert('add some values first')
        enableBtns1()
        return;
    }



    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'

    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.innerHTML = `
    <p style="font-size:16px;">To dequeue from queue which we implemented with stack, we need one more stack \'Stack2\'. And we will pop values from Stack1 and push to Stack2 till Stack1.length becomes 1. Note that here we are implementing queue with stack so we can't use shift method in stack, we can use only pop method.</p>
     <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=getQueue2()>ok</button> 
    `

    return;

}


// get queue2
function getQueue2() {

    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'none'
    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.innerHTML = ''

    // document.getElementById('array_box_queue1').innerHTML = 
    // `<div id="array_stack1_${0}" style="width:61.6px;" class="with_queue_index1">
    //      ?
    //  </div>`;

    let queue2_div = document.getElementById('queue2')
    queue2_div.style.display = 'block'
    shift()
}


// shift from queue1 to queue2
let queue2 = []
function shift() {



    // make array from html
    const divs = document.querySelectorAll('.with_queue_index');
    const totalDivs = divs.length;

    // console.log(divs)

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    // alert(queue1)

    // console.log(array)

    let index = array.length-1;

    // alert(index)

    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`array_stack_${index}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`array_stack_${index}`).style.backgroundColor = 'chocolate'
        }
        else {
            document.getElementById(`array_stack_${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
        }

    }, 100);

    // replace each value from left to right
    setTimeout(() => {
        clearInterval(intervel);
        let box = document.getElementById(`array_stack_${index}`)
        box.innerHTML = ''
        box.style.backgroundColor = ''

        // alert(queue1)
        // alert(array)

        let val = queue1.pop()
        array.pop()
        queue2.push(val)
        makeQueue2(queue2)

    }, 1000);


    // do this operation on array and make html from array
    let j = array.length-1;
    setTimeout(() => {

        const divs = document.querySelectorAll('.with_queue_index');
        const totalDivs = divs.length;


        let array = []
        for (let i = 0; i < j; i++) {
            array.push(Number(divs[i].innerText))
        }


        let htmlBox = ''
        array.forEach((val, index) => {

            htmlBox +=
                ` <div id="array_stack_${index}" class="with_queue_index">
             ${val}
           </div>`

        })

        let htmlIndex = ''
        array.forEach((val, index) => {
            htmlIndex +=
                ` <div id="stackbox${index}" class="with_queue_ind">
                 ${index}
             </div>`
        })

        // newWidth = newWidth + 1.25

        // newWidth = newWidth - 60

        if (array.length === 7) {
            newWidth = 417
        }

        if (array.length === 6) {
            newWidth = 357.75
        }

        if (array.length === 5) {
            newWidth = 298.5
        }

        if (array.length === 4) {
            newWidth = 239.25
        }

        if (array.length === 3) {
            newWidth = 180.6
        }

        if (array.length === 2) {
            newWidth = 121.2
        }

        if (array.length === 1) {
            newWidth = 61.2
        }

        
        // array box
        document.getElementById('array_box_queue').innerHTML = ''
        document.getElementById('array_box_queue').innerHTML = htmlBox
        document.getElementById('array_box_queue').style.width = `${newWidth}px`

        // array index
        document.getElementById('array_index_queue').innerHTML = ''
        document.getElementById('array_index_queue').innerHTML = htmlIndex
        document.getElementById('array_index_queue').style.width = `${newWidth}px`

        j--;

    }, 1000)

    setTimeout(() => {

        if (array.length > 1) {
            shift()
        } else {
            showMessage()
        }

    }, 1000);

}


let queue2Width = 0

// make queue2
function makeQueue2(array) {

    // console.log(array)

    let htmlBox = ''
    array.forEach((val, index) => {

        htmlBox +=
            ` <div id="array_stack1_${index}" class="with_queue_index1">
        ${val}
      </div>`

    })

    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="stackbox1${index}" class="with_queue_ind1">
            ${index}
        </div>`
    })

    // queue2Width = queue2Width + 62.2

    if (array.length === 7) {
        queue2Width = 417
    }

    if (array.length === 6) {
        queue2Width = 357.75
    }

    if (array.length === 5) {
        queue2Width = 298.5
    }

    if (array.length === 4) {
        queue2Width = 239.25
    }

    if (array.length === 3) {
        queue2Width = 180.6
    }

    if (array.length === 2) {
        queue2Width = 121.2
    }

    if (array.length === 1) {
        queue2Width = 61.2
    }

    // array box
    document.getElementById('array_box_queue1').innerHTML = htmlBox
    document.getElementById('array_box_queue1').style.width = `${queue2Width}px`
    document.getElementById('array_box_queue1').style.visibility = 'visible';

    // array index
    document.getElementById('array_index_queue1').innerHTML = htmlIndex
    document.getElementById('array_index_queue1').style.width = `${queue2Width}px`
    document.getElementById('array_index_queue1').style.visibility = 'visible';

    queue2Width = queue2Width - 3

}




// shift values form queue2 to queue1

function showMessage() {

    const divs = document.querySelectorAll('.with_queue_index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'block'

    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.innerHTML = `
    <p style="font-size:16px;">Now Stack1.length is 1 and the last value ${array[0]} in Stack1 will dequeue from the queue.</p>
     <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=popFromStack()>ok</button> 
    `

}


// pop from stack

function popFromStack() {
    


    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'none'

    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.innerHTML = ''

    // make array from html
    const divs = document.querySelectorAll('.with_queue_index');
    const totalDivs = divs.length;

    let array1 = []
    for (let i = 0; i < totalDivs; i++) {
        array1.push(Number(divs[i].innerText))
    }

    let val = queue1.pop()

    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`array_stack_${0}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`array_stack_${array1.length-1}`).style.backgroundColor = 'chocolate'
            document.getElementById(`queue_stack${array1.length-1}`).style.backgroundColor = 'chocolate'
            document.getElementById('out_with_queue').style.color = 'red'
        }
        else {
            document.getElementById(`array_stack_${array1.length-1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`queue_stack${array1.length-1}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById('out_with_queue').style.color = 'black'
        }

    }, 100);

    // replace each value from left to right
    setTimeout(() => {
        clearInterval(intervel);
        let box = document.getElementById(`array_stack_${array1.length-1}`)
        document.getElementById(`array_stack_${array1.length-1}`).style.height = '64px'
        box.innerHTML = ''
        box.style.backgroundColor = ''

        document.getElementById(`queue_stack${array1.length-1}`).style.backgroundColor = ''
        document.getElementById('out_with_queue').style.color = ''

        // get array from queue2

        // make array from html
        const divs = document.querySelectorAll('.with_queue_index1');
        const totalDivs = divs.length;

        let array = []

        // alert(array)
        for (let i = 0; i < totalDivs; i++) {
            array.push(Number(divs[i].innerText))
        }

        // alert(array)

        // remove from stack

        newStackWidth = newStackWidth - 50

        let stackBox = ''
        array.reverse().forEach((val, index) => {

            stackBox +=
                ` <div id="queue_stack${index}" class="stack">
         ${val}
       </div>`

        })

        newStackWidth = newStackWidth - 9.95


        // array box
        document.getElementById('stack_box_queue').innerHTML = stackBox
        document.getElementById('stack_box_queue').style.height = `${newStackWidth}px`

        let note_pad_div1 = document.getElementById('note_pad_div1')
        note_pad_div1.style.display = 'block'

        let note_pad1 = document.getElementById('note_pad1')
        note_pad1.innerHTML = `
    <p style="font-size:16px;">Now pop all the values of Stack2 to Stack1.</p>
     <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=reShift()>ok</button> 
    `

    }, 1000);



}

function reShift() {

    // alert(queue2)

    let note_pad_div1 = document.getElementById('note_pad_div1')
    note_pad_div1.style.display = 'none'

    let note_pad1 = document.getElementById('note_pad1')
    note_pad1.innerHTML = ''

    // make array from html
    const divs = document.querySelectorAll('.with_queue_index1');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }


    let index = array.length-1;

    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`array_stack1_${index}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)') {
            document.getElementById(`array_stack1_${index}`).style.backgroundColor = 'chocolate'
        }
        else {
            document.getElementById(`array_stack1_${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
        }

    }, 100);

    // replace each value from left to right
    setTimeout(() => {
        clearInterval(intervel);
        let box = document.getElementById(`array_stack1_${index}`)
        box.innerHTML = ''
        box.style.backgroundColor = ''

        let val = queue2.pop()
        // alert(val)
        queue1.push(val)
        makeQueue1(queue1)

    }, 1000);


    // do this operation on array and make html from array
    let j = queue2.length-1;
    setTimeout(() => {

        const divs = document.querySelectorAll('.with_queue_index1');
        const totalDivs = divs.length;

        let array = []
        for (let i = 0; i < j; i++) {
            array.push(Number(divs[i].innerText))

        }
        // array.pop()
        // totalDivs--

        // alert(array)

        let htmlBox = ''
        array.forEach((val, index) => {

            htmlBox +=
                    ` <div id="array_stack1_${index}" class="with_queue_index1">
             ${val}
           </div>`
            
        })

        let htmlIndex = ''
        array.forEach((val, index) => {
            htmlIndex +=
                ` <div id="stackbox1${index}" class="with_queue_ind1">
                 ${index}
             </div>`
        })

        if (array.length === 7) {
            queue2Width = 417
        }

        if (array.length === 6) {
            queue2Width = 357.75
        }

        if (array.length === 5) {
            queue2Width = 298.5
        }

        if (array.length === 4) {
            queue2Width = 239.25
        }

        if (array.length === 3) {
            queue2Width = 180.6
        }

        if (array.length === 2) {
            queue2Width = 121.2
        }

        if (array.length === 1) {
            queue2Width = 61.2
        }


        // array box
        document.getElementById('array_box_queue1').innerHTML = htmlBox
        document.getElementById('array_box_queue1').style.width = `${queue2Width}px`

       

        // array index
        document.getElementById('array_index_queue1').innerHTML = htmlIndex
        document.getElementById('array_index_queue1').style.width = `${queue2Width}px`

        if (queue2.length === 0) {
            document.getElementById('queue2').style.display = 'none'
            queue2Width = 0;
            document.getElementById('array_index_queue1').style.visibility = 'hidden';
            document.getElementById('array_box_queue1').style.visibility = 'hidden';
        }


        j--;

    }, 1000)

    setTimeout(() => {

        if (array.length > 1) {
            reShift()
        } else {
            enableBtns1()
        }

    }, 1000);
}

let queue1Width = 0

// make queue2
function makeQueue1(array) {

    // alert(queue1)
    
    let htmlBox = ''
    array.forEach((val, index) => {

        htmlBox +=
            ` <div id="array_stack_${index}" class="with_queue_index">
        ${val}
      </div>`

    })

    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="stackbox${index}" class="with_queue_ind">
            ${index}
        </div>`
    })

    if (array.length === 7) {
        newWidth = 417
    }

    if (array.length === 6) {
        newWidth = 357.75
    }

    if (array.length === 5) {
        newWidth = 298.5
    }

    if (array.length === 4) {
        newWidth = 239.25
    }

    if (array.length === 3) {
        newWidth = 180.6
    }

    if (array.length === 2) {
        newWidth = 121.2
    }

    if (array.length === 1) {
        newWidth = 61.2
    }



    // array box
    document.getElementById('array_box_queue').innerHTML = htmlBox
    document.getElementById('array_box_queue').style.width = `${newWidth}px`

    // array index
    document.getElementById('array_index_queue').innerHTML = htmlIndex
    document.getElementById('array_index_queue').style.width = `${newWidth}px`


}


// disable button
function disableBtns1() {
    // disable button
    document.getElementById('insertAtLastBtn_queue').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('removeBtn_queue').setAttribute('disabled', 'disabled')
}


// enable buttons
function enableBtns1() {
    // enable button
    document.getElementById('insertAtLastBtn_queue').removeAttribute('disabled')
    // enable button
    document.getElementById('removeBtn_queue').removeAttribute('disabled')
}