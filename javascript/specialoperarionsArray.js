// reverse


function reverseArray(event) {

    event.preventDefault()

    disableBtns1()

    if (!localStorage.getItem('gaveExplanationSearch')) {

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = `
<p style="font-size:16px;">Two pointer method. When we reverse an array we will take two pointer. i=0 and j=array.length-1. Then we will swap those elements. After that we will increment i value and decrement j value. Continue until i < j</p>
 <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=reverseArr()>ok</button> 
`
        localStorage.setItem('gaveExplanationSearch', true)

    } else {
        reverseArr()
    }
}

function reverseArr() {

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

    let j = array.length - 1;
    document.getElementById(`${0}`).style.backgroundColor = 'rgb(247, 128, 43)'
    document.getElementById(`${j}`).style.backgroundColor = 'rgb(247, 128, 43)'
    j--;

    let totalTime = Math.ceil(array.length / 2)

    for (let i = 1; i < totalTime + 1; i++) {
        setTimeout(() => {
            document.getElementById(`${i - 1}`).style.backgroundColor = ''
            document.getElementById(`${j + 1}`).style.backgroundColor = ''

            let temp = array[i - 1];
            array[i - 1] = array[j + 1];
            array[j + 1] = temp;
            displayArray(); // Refresh array display

            if (i < j) {
                document.getElementById(`${i}`).style.backgroundColor = 'rgb(247, 128, 43)'
                document.getElementById(`${j}`).style.backgroundColor = 'rgb(247, 128, 43)'
            }
            j--;
        }, i * 1000);
    }

    // enable btns

    setTimeout(() => {
        document.getElementById(`${totalTime - 1}`).style.backgroundColor = '';
        document.getElementById(`${totalTime}`).style.backgroundColor = '';
        enableBtns1()
    }, totalTime * 1000)



    //  displayb array
    function displayArray() {
        let htmlBox = ''
        array.forEach((val, index) => {
            htmlBox +=
                ` <div id="${index}" class="index">
                      ${val}
                    </div>`
        })

        // array box
        document.getElementById('array_box').innerHTML = htmlBox

    }

}


// linear search

function LinearSearch(event) {
    event.preventDefault()

    disableBtns1()

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = Number(document.getElementById('Linear_search_value').value)


    let index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            index = i
            break;
        }
    }

    if (index===undefined) {
        alert("No such element found")
        enableBtns1()
        return;
    }

    document.getElementById(`${0}`).style.backgroundColor = 'rgb(247, 128, 43)'

    let intervel;
    for (let i = 1; i <= index; i++) {

        if (array[i] === val) {
            setTimeout(() => {
                // intervel for changing color
                intervel = setInterval(() => {
                    let box = document.getElementById(`${index}`)
                    box.style.backgroundColor === 'chocolate'
                    if (box.style.backgroundColor === 'rgb(247, 128, 43)')
                        document.getElementById(`${index}`).style.backgroundColor = 'chocolate'
                    else
                        document.getElementById(`${index}`).style.backgroundColor = 'rgb(247, 128, 43)'
                }, 100);
            }, i * 1000)
        }

        setTimeout(() => {
            document.getElementById(`${i}`).style.backgroundColor = 'rgb(247, 128, 43)'
            document.getElementById(`${i - 1}`).style.backgroundColor = ''
        }, i * 1000)
    }


    // enable  btns
    setTimeout(() => {
        clearInterval(intervel)
        document.getElementById(`${index}`).style.backgroundColor = ''
        enableBtns1()
    }, (index + 1) * 1000)
}


// binary search

function BinarySearch(event) {
    event.preventDefault()

    disableBtns1()

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = Number(document.getElementById('binary_search_value').value)

    let sts = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            sts = true
            break
        }
    }

    if (!sts) {
        alert("No such value found in array")
        enableBtns1()
        return
    }

    document.getElementById('binary_search_value').setAttribute('readOnly', 'readOnly')

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'flex'

    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
   <p style="font-size:16px">Binary search can be performed only on sorted arrays\nso first i will sort the array , then you can perform binary search on that.</p>
   <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=sortArray()>ok</button> 
   `
}

// to sort array for binary search

function sortArray() {

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }


    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''
    note_pad.innerHTML = `
    <p style="font-size:16px">Now i have sorted the array in ascending order. Then first find the middle element.  Math.floor(0+${array.length - 1}/2).</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=explanation1()>ok</button> 
    `

    // sort array
    array = array.sort((a, b) => a - b)

    // make html from sorted array
    let htmlBox = ''
    array.forEach((val, index) => {
        htmlBox +=
            ` <div id="${index}" class="index">
                      ${val}
                    </div>`
    })

    // array box
    document.getElementById('array_box').innerHTML = htmlBox

}


// doing binary search now after sorting

function explanation1() {

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = Number(document.getElementById('binary_search_value').value)

    document.getElementById(`${Math.floor((0 + array.length - 1) / 2)}`).style.backgroundColor = 'green'

    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''
    note_pad.innerHTML = `
    <p style="font-size:16px">And ${array[Math.floor((0 + array.length - 1) / 2)]} is the middle element. Now check weather the search value ${val} is the middle value or less than ${array[Math.floor((0 + array.length - 1) / 2)]} or greater than ${array[Math.floor((0 + array.length - 1) / 2)]}</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=explanation2()>ok</button> 
    `
}


function explanation2() {

    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = Number(document.getElementById('binary_search_value').value)

    let midd = Math.floor((0 + array.length - 1) / 2)

    let note_pad = document.getElementById('note_pad')

    if (array[midd] === val) {
        note_pad.innerHTML = `
        <p style="font-size:16px">${array[midd]} is the middle value. Hence we found ${array[midd]}</p>
        <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=done()>ok</button> 
        `

        document.getElementById(`${Math.floor((0 + array.length - 1) / 2)}`).style.backgroundColor = 'rgb(247, 128, 43)'

    } else if (val < array[midd]) {

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = ''
        note_pad.innerHTML = `
        <p style="font-size:16px">Search value ${val} is less than mid. So we have divided the array. and do same operations again.</p>
        <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=explanation1()>ok</button> 
        `
        divide()

    } else {

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = ''
        note_pad.innerHTML = `
        <p style="font-size:16px">Search value ${val} is greater than mid. So we have divided the array. and do same operations again.</p>
        <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=explanation1()>ok</button> 
        `
        divide()

    }

}

// divide array

function divide() {
    // ṃake array from html 
    const divs = document.querySelectorAll('.index');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let val = Number(document.getElementById('binary_search_value').value)
    let j = array.length - 1
    let start = 0;

    while (start <= j) {

        let midd = Math.floor((0 + array.length - 1) / 2)
        if (array[midd] === val) {
            alert("found at")
        } else if (val < array[midd]) {
            j = midd - 1
            break
        } else {
            start = midd + 1
            break
        }

    }

    let newArray = []

    for (let i = start; i <= j; i++) {
        newArray.push(array[i])
    }

    // alert(newArray)

    let htmlBox = ''
    newArray.forEach((val, index) => {
        htmlBox +=
            ` <div id="${index}" class="index">
        ${val}
      </div>`
    })

    // make index html from array
    let htmlIndex = ''
    newArray.forEach((val, index) => {
        htmlIndex +=
            ` <div id="box${index}" class="ind">
            ${index}
        </div>`
    })

    // width = width + 60

    if (newArray.length === 10) {
        width = 596.4
    }

    if (newArray.length === 9) {
        width = 537
    }

    if (newArray.length === 8) {
        width = 477.4
    }

    if (newArray.length === 7) {
        width = 418
    }

    if (newArray.length === 6) {
        width = 358.8
    }

    if (newArray.length === 5) {
        width = 299.5
    }

    if (newArray.length === 4) {
        width = 240
    }

    if (newArray.length === 3) {
        width = 180.6
    }

    if (newArray.length === 2) {
        width = 121.2
    }

    if (newArray.length === 1) {
        width = 62
    }

    // array box
    document.getElementById('array_box').innerHTML = htmlBox
    document.getElementById('array_box').style.width = `${(width)}px`

    // array index
    document.getElementById('array_index').innerHTML = htmlIndex
    document.getElementById('array_index').style.width = `${(width)}px`

}


// final operations
function done() {
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

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'none'

    
    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = ''

    document.getElementById('binary_search_value').removeAttribute('readOnly')

    enableBtns1()
}



function disableBtns1() {

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

function enableBtns1() {
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