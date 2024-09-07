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

    // generate array
    let array = generateRandomArray(4)

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
    document.getElementById('array_box').style.width = '240px'

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
     document.getElementById('array_index').style.width = '240px'

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

let width = 240

// push

function insertAtLast(event) {
    event.preventDefault()

    disableBtns()

    if (!localStorage.getItem('gaveExplanation')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML =`
<p style="font-size:16px;">In array with push method we can add values to the end.</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=push()>ok</button> 
`
        localStorage.setItem('gaveExplanation', true)

    } else {
        push()
    }

}

function push(){

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

    if (array.length === 10) {
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
        if (box.style.backgroundColor === 'rgb(247, 128, 43)')
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'chocolate'
        else
            document.getElementById(`${array.length - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
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
        clearInterval(intervel);

        document.getElementById(`${array.length - 1}`).style.backgroundColor = ''

        enableBtns()

    }, 1000);

    // width = width + 60

    if (array.length === 10) {
        width = 596.4
    }

    if (array.length === 9) {
        width = 537
    }

    if (array.length === 8) {
        width = 477.4
    }

    if (array.length === 7) {
        width = 418
    }

    if (array.length === 6) {
        width = 358.8
    }

    if (array.length === 5) {
        width = 299.5
    }

    if (array.length === 4) {
        width = 240
    }

    if (array.length === 3) {
        width = 180.6
    }

    if (array.length === 2) {
        width = 121.2
    }

    if (array.length === 1) {
        width = 62.2
    }

    // array box
    document.getElementById('array_box').innerHTML = htmlBox
    document.getElementById('array_box').style.width = `${width}px`

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
    document.getElementById('array_index').style.width = `${width}px`

}


// remove 

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
 
     if (array.length < 4) {
         alert('can\'t remove anymore')
 
         enableBtns()
 
         return
     }
 
 
     let val = document.getElementById('number').value
     let index = 0;
 
 
     // get index of the value which we are removing
     for (let i = 0; i < array.length; i++) {
         if (array[i] == Number(val)) {
             index = i
             break
         }
 
         if (i === array.length - 1) {
             alert("No such value in array")
 
             enableBtns()
 
             return
         }
     }

    if (!localStorage.getItem('gaveExplanation1')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML =`
<p style="font-size:16px;">When we remove a value from array we should re arrange the elements, from right to left.</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=remove()>ok</button> 
`
        localStorage.setItem('gaveExplanation1', true)

    } else {
        remove()
    }
}

function remove(){

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
 
     if (array.length < 4) {
         alert('can\'t remove anymore')
 
         enableBtns()
 
         return
     }
 
 
     let val = document.getElementById('number').value
     let index = 0;
 
 
     // get index of the value which we are removing
     for (let i = 0; i < array.length; i++) {
         if (array[i] == Number(val)) {
             index = i
             break
         }
 
         if (i === array.length - 1) {
             alert("No such value in array")
 
             enableBtns()
 
             return
         }
     }
 
 
     // intervel for changing color
     let intervel = setInterval(() => {
         let box = document.getElementById(`${index}`)
         box.style.backgroundColor === 'chocolate'
         if (box.style.backgroundColor === 'rgb(247, 128, 43)')
             document.getElementById(`${index}`).style.backgroundColor = 'chocolate'
         else
             document.getElementById(`${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
     }, 100);
 
     // replace each value from left to right
     setTimeout(() => {
         clearInterval(intervel);
         let box = document.getElementById(`${index}`)
         // box.style.width = '57px'
         box.innerHTML = ''
         box.style.backgroundColor = ''
         // document.getElementById(`${index+1}`).style.backgroundColor = 'rgb(247, 128, 43)'
         let time = 0;
         for (let i = index; i < array.length - 1; i++) {
             if (i === array.length - 2) {
                 setTimeout(() => {
                     document.getElementById(`${i}`).innerHTML = array[i + 1]
                     document.getElementById(`${i}`).style.backgroundColor = ''
                     document.getElementById(`${i + 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
                     // document.getElementById(`${i + 1}`).style.width = '57px'
                     document.getElementById(`${i + 1}`).innerHTML = ''
                 }, time * 1000);
             } else {
                 setTimeout(() => {
                     document.getElementById(`${i}`).innerHTML = array[i + 1]
                     document.getElementById(`${i}`).style.backgroundColor = ''
                     document.getElementById(`${i + 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
                     // document.getElementById(`${i + 1}`).style.width = '57px'
                     document.getElementById(`${i + 1}`).innerHTML = ''
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
 
         if (array.length === 10) {
             width = 596.4
         }
     
         if (array.length === 9) {
             width = 537
         }
     
         if (array.length === 8) {
             width = 477.4
         }
     
         if (array.length === 7) {
             width = 418
         }
     
         if (array.length === 6) {
             width = 358.8
         }
     
         if (array.length === 5) {
             width = 299.5
         }
     
         if (array.length === 4) {
             width = 240
         }
     
         if (array.length === 3) {
             width = 180.6
         }
     
         if (array.length === 2) {
             width = 121.2
         }
     
         if (array.length === 1) {
             width = 62.2
         }
 
         // array box
         document.getElementById('array_box').innerHTML = htmlBox
         document.getElementById('array_box').style.width = `${width}px`
 
         // array index
         document.getElementById('array_index').innerHTML = htmlIndex
         document.getElementById('array_index').style.width = `${width}px`
 
         enableBtns()
 
 
 
     }, (array.length - index) * 1000)
}

// insert

function insertValue(event) {

    event.preventDefault();

    disableBtns()

    if (!localStorage.getItem('gaveExplanation2')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML =`
<p style="font-size:16px;">When we insert a value to array we should re arrange the elements, from left to right.</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=insert()>ok</button> 
`
        localStorage.setItem('gaveExplanation2', true)

    } else {
        insert()
    }

}

function insert(){

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'

    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''

    // make array from html
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    if (array.length === 10) {
        alert("can\'t insert more")

        enableBtns()

        return
    }

    // get values from form
    let index = Number(document.getElementById('position').value)
    let value = Number(document.getElementById('insertingValue').value)

    if (index < 0 || index > array.length - 1) {
        alert("enter valid index value")

        enableBtns()

        return
    }

    if (value < -100 || value > 100) {
        alert("enter a values btw 10 and 100")

        enableBtns()

        return
    }


    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`${index}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)')
            document.getElementById(`${index}`).style.backgroundColor = 'chocolate'
        else
            document.getElementById(`${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
    }, 100);


    array.push(0)

    // make array html from array
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

    // make index html from array
    let htmlIndex = ''
    array.forEach((val, index) => {
        htmlIndex +=
            ` <div id="box${index}" class="ind">
            ${index}
        </div>`
    })

    if (array.length === 10) {
        width = 596.4
    }

    if (array.length === 9) {
        width = 537
    }

    if (array.length === 8) {
        width = 477.4
    }

    if (array.length === 7) {
        width = 418
    }

    if (array.length === 6) {
        width = 358.8
    }

    if (array.length === 5) {
        width = 299.5
    }

    if (array.length === 4) {
        width = 240
    }

    if (array.length === 3) {
        width = 180.6
    }

    if (array.length === 2) {
        width = 121.2
    }

    if (array.length === 1) {
        width = 62.2
    }

    // array box
    document.getElementById('array_box').innerHTML = htmlBox
    document.getElementById('array_box').style.width = `${width}px`

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
    document.getElementById('array_index').style.width = `${width}px`


    // replace each value from right to left
    let time = 1;
    for (let i = array.length; i > index; i--) {
        setTimeout(() => {
            if (array[i-1]) {
                document.getElementById(`${i}`).innerHTML = array[i - 1]
                document.getElementById(`${i}`).style.backgroundColor = ''
                document.getElementById(`${i - 1}`).style.backgroundColor = 'rgb(247, 128, 43)'
                // document.getElementById(`${i - 1}`).style.width = '16px'
                document.getElementById(`${i - 1}`).innerHTML = ''
            }
        }, time * 1000);
        time++
    }

    setTimeout(() => {

        clearInterval(intervel)

        document.getElementById(`${index}`).innerHTML = value
        document.getElementById(`${index}`).style.backgroundColor = ''

        enableBtns()

    }, (time) * 1000);


}

function Update(event) {
    event.preventDefault()

    disableBtns()

    // make array from html
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    // get values from form
    let index = Number(document.getElementById('index').value)
    let value = Number(document.getElementById('updatingValue').value)

    if (index < 0 || index > array.length - 1) {
        alert("enter valid index value")

        enableBtns()

        return
    }

    if (value < -100 || value > 100) {
        alert("enter a values btw 10 and 100")

        enableBtns()

        return
    }


    // intervel for changing color
    let intervel = setInterval(() => {
        let box = document.getElementById(`${index}`)
        box.style.backgroundColor === 'chocolate'
        if (box.style.backgroundColor === 'rgb(247, 128, 43)')
            document.getElementById(`${index}`).style.backgroundColor = 'chocolate'
        else
            document.getElementById(`${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
    }, 100);

    setTimeout(() => {
        clearInterval(intervel)
        document.getElementById(`${index}`).innerHTML = value
        document.getElementById(`${index}`).style.backgroundColor = ''

        enableBtns()

    }, 1000);
}


function disableBtns() {
    // disable button
    document.getElementById('insertAtLastBtn').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('removeBtn').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('insertAtPosition').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('update').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('reverse').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('linerarSearch').setAttribute('disabled', 'disabled')
    // disable button
    document.getElementById('binarySearch').setAttribute('disabled', 'disabled')
}

function enableBtns() {
    // enable button
    document.getElementById('insertAtLastBtn').removeAttribute('disabled')
    // enable button
    document.getElementById('removeBtn').removeAttribute('disabled')
    // enable button
    document.getElementById('insertAtPosition').removeAttribute('disabled')
    // enable button
    document.getElementById('update').removeAttribute('disabled')
    // enable button
    document.getElementById('reverse').removeAttribute('disabled')
    // enable button
    document.getElementById('linerarSearch').removeAttribute('disabled')
    // enable button
    document.getElementById('binarySearch').removeAttribute('disabled')
}