function loadLinkedListPage() {

    // let basic_div = document.getElementById('basic_operations')
    // let special_div = document.getElementById('special_operations')
    // let search_div = document.getElementById('search_operations')

    // basic_div.style.display = 'none'
    // special_div.style.display = 'none'
    // // set operations
    // let which = localStorage.getItem('which')


    // if (which) {
    //     if (which === 'basic') {
    //         basic_div.style.display = 'block'
    //         special_div.style.display = 'none'
    //         search_div.style.display = 'none'
    //     } else if (which === 'special') {
    //         special_div.style.display = 'block'
    //         basic_div.style.display = 'none'
    //         search_div.style.display = 'none'
    //     } else {
    //         search_div.style.display = 'block'
    //         special_div.style.display = 'none'
    //         basic_div.style.display = 'none'
    //     }
    // } else {
    //     basic_div.style.display = 'block'
    //     special_div.style.display = 'none'
    // }

    // generate linked list 
    let linkedList = generateRandomLinkedList(3)

    let htmlNodes = '';

    linkedList.forEach((node, index) => {
        htmlNodes += `
             <div class="oneNode">
               <div id="value${index + 1}" style="position:relative;left:0px;" class="value">${node.value}</div>
               <div class="address">${node.address}</div>
             </div>
             ${index !== linkedList.length - 1 ? '<div class="arrow">→</div>' : ''}
         `;
    });

    document.getElementById('linked-list').innerHTML = htmlNodes;

}

function generateRandomLinkedList(size) {
    let randomLinkedList = [];

    // Generate random values and addresses
    for (let i = 0; i < size; i++) {
        let randomValue = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        let randomAddress = i === size - 1 ? 'null' : Math.floor(Math.random() * (199 - 100 + 1)) + 100;
        randomLinkedList.push({ value: randomValue, address: randomAddress });
    }

    return randomLinkedList;
}

// append

function insertAtLast(event) {
    event.preventDefault()

    disableBtns()

    const divs = document.querySelectorAll('.oneNode');
    if (divs.length > 5) {
        alert('Can\'t add more values')
        enableBtns()
        return
    }

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    note_pad.innerHTML = `
    <p style="font-size:16px;">When we do append we shoulds start checking from the head, traverse it until you find next is null.</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=append()>ok</button> 
`
}

function append() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    let value = document.getElementById('appendValue').value

    //  make and array from linked list
    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });



    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            if (document.getElementById(`value${i}`)) {
                document.getElementById(`value${i}`).style.backgroundColor = '';
            }

            document.getElementById(`value${i + 1}`).style.backgroundColor = 'chocolate';

            if (i === array.length - 1) {
                note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">Node with value ${array[i].value}'s next is null</p>
                `;

                addValue(i + 1);
            } else {
                note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">Node with value ${array[i].value}'s next is not null</p>
                `;
            }
        }, i * 1200);
    }

    function addValue(i) {
        let address = new Set();

        // Add existing addresses to the Set
        for (let i = 0; i < array.length; i++) {
            address.add(array[i].address);
        }

        let newAddress;
        let maxSize = array.length + 1;

        while (address.size < maxSize) {
            newAddress = Math.floor(Math.random() * (199 - 100 + 1)) + 100;
            address.add(newAddress);
        }

        array.push({ value: value, address: newAddress });
        array[array.length - 2].address = array[array.length - 1].address;
        array[array.length - 1].address = "null";

        setTimeout(() => {
            document.getElementById(`value${i}`).style.backgroundColor = 'green';
        }, 1200);

        setTimeout(() => {
            let htmlNodes = '';

            array.forEach((node, index) => {
                htmlNodes += `
                    <div class="oneNode">
                        <div id="value${index + 1}" style="position:relative;left:0px;" class="value">${node.value}</div>
                        <div class="address">${node.address}</div>
                    </div>
                    ${index !== array.length - 1 ? '<div class="arrow">→</div>' : ''}
                `;
            });

            document.getElementById('linked-list').innerHTML = htmlNodes;

            note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">${value} is added at address ${newAddress}</p>
                `;



        }, 2500);

        setTimeout(() => {
            enableBtns()
        }, 2700);
    }


}



// insert at first

function insertAtFirst(event) {
    event.preventDefault()

    disableBtns()

    const divs = document.querySelectorAll('.oneNode');
    if (divs.length > 5) {
        alert('Can\'t add more values')
        enableBtns()
        return
    }

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    note_pad.innerHTML = `
    <p style="font-size:16px;">In prepend it will be adding values to the head. And prevoius head will become next value of new head.</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=prepend()>ok</button> 
`
}

// prepend

function prepend() {

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    let value = document.getElementById('prependValue').value


    //  make and array from linked list
    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });


    note_pad.innerHTML = `
    <p style="font-size:16px; margin-bottom:0px">This is the head node.</p>
`

    setTimeout(() => {
        document.getElementById(`value${1}`).style.backgroundColor = 'green'
    }, 0);

    setTimeout(() => {
        document.getElementById(`value${1}`).style.backgroundColor = ''

        let address = new Set();

        // Add existing addresses to the Set
        for (let i = 0; i < array.length; i++) {
            address.add(array[i].address);
        }

        let newAddress;
        let maxSize = array.length + 1;

        while (address.size < maxSize) {
            newAddress = Math.floor(Math.random() * (199 - 100 + 1)) + 100;
            address.add(newAddress);
        }

        array.unshift({ value: value, address: newAddress });

        let htmlNodes = '';

        array.forEach((node, index) => {
            htmlNodes += `
                    <div class="oneNode">
                        <div id="value${index + 1}" style="position:relative;left:0px;" class="value">${node.value}</div>
                        <div class="address">${node.address}</div>
                    </div>
                    ${index !== array.length - 1 ? '<div class="arrow">→</div>' : ''}
                `;
        });

        document.getElementById('linked-list').innerHTML = htmlNodes;

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">${value} is added at head and previuos head ${array[1].value} became the next value of new head.</p>
                `;


    }, 2000)

    setTimeout(() => {
        enableBtns()
    }, 2200);

}


// remove values

function removeValues(event) {

    event.preventDefault()

    disableBtns()

    //  make and array from linked list
    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });


    let value = document.getElementById('removeValue').value

    let isFound = array.find(item => item.value === Number(value));

    if (divs.length < 3) {
        alert('Can\'t remove anymore')
        enableBtns()
        return
    }

    if (!isFound) {
        alert("No such value found!")
        enableBtns()
        return
    }

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    note_pad.innerHTML = `
    <p style="font-size:16px;">Start from the head of the linked list and traverse it until you find the node to remove.
Keep track of the previous node as well, since you'll need to change its next pointer.</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=remove()>ok</button> 
`


}

// remove

function remove() {


    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });

    let value = document.getElementById('removeValue').value

    let isFound = array.find(item => item.value === Number(value));

    if (!isFound) {
        alert("No such value found!")
        enableBtns()
        return
    }

    let index = array.findIndex((item) => item === isFound)

    for (let i = 0; i < index + 1; i++) {
        setTimeout(() => {
            if (document.getElementById(`value${i}`)) {
                document.getElementById(`value${i}`).style.backgroundColor = '';
            }

            document.getElementById(`value${i + 1}`).style.backgroundColor = 'chocolate';

            if (array[i].value === Number(value)) {
                note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">${value} is found</p>
                `;

                removeValuefromll(i + 1);
            } else {
                note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">Traverse until we find ${value}</p>
                `;
            }
        }, i * 1200);
    }


}

function removeValuefromll(i) {

    let note_pad = document.getElementById('note_pad')

    setTimeout(() => {
        document.getElementById(`value${i}`).style.backgroundColor = 'green'
        note_pad.innerHTML = `
        <p style="font-size:16px;">Once the node to remove is found, change the next pointer of the previous node to point to the node after the one being removed.
    If you're removing the head node, you simply update the head pointer to the second node.</p>
        <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=removeNow('${i}')>ok</button> 
    `

    }, 1000);

}

function removeNow(i) {


    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });

    if (Number(i) - 1 === 0) {

        let value = array[0].value

        array.shift()

        let htmlNodes = '';

        array.forEach((node, index) => {
            htmlNodes += `
                <div class="oneNode">
                    <div id="value${index + 1}" style="position:relative;left:0px;" class="value">${node.value}</div>
                    <div class="address">${node.address}</div>
                </div>
                ${index !== array.length - 1 ? '<div class="arrow">→</div>' : ''}
            `;
        });

        document.getElementById('linked-list').innerHTML = htmlNodes;
        let note_pad = document.getElementById('note_pad')

        note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px">Changed the head to ${array[0].value} that means node with value ${value} is removed.</p>
            
        `

       setTimeout(() => {
        enableBtns()
       }, 1000);

    } else {

     let value = array[Number(i)-1].value
     let prev = array[Number(i)-2].value

     array.splice(Number(i)-1,1)

     let htmlNodes = '';

     array[array.length-1].address = 'null'

     array.forEach((node, index) => {
         htmlNodes += `
             <div class="oneNode">
                 <div id="value${index + 1}" style="position:relative;left:0px;" class="value">${node.value}</div>
                 <div class="address">${node.address}</div>
             </div>
             ${index !== array.length - 1 ? '<div class="arrow">→</div>' : ''}
         `;
     });

     document.getElementById('linked-list').innerHTML = htmlNodes;

     let note_pad = document.getElementById('note_pad')

     note_pad.innerHTML = `
         <p style="font-size:16px; margin-bottom:0px">Changed the next value of ${prev} from ${value} to ${array[Number(i)-1]? array[Number(i)-1].value: 'null'}. That means node with value ${value} is removed</p>
        `

     setTimeout(() => {
        enableBtns()
       }, 1000);

    }


}


// search values

function Search(event){

    event.preventDefault()

    disableBtns()

    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'

    let note_pad = document.getElementById('note_pad')

    document.getElementById('searchValue').setAttribute('readOnly','readOnly')

    note_pad.innerHTML = `
    <p style="font-size:16px;">Start from the head of the linked list and traverse it until you find the perticular node.</p>
    <button style="padding:0px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:500; width: 50px;font-size: 16px;padding-bottom: 4px;" onclick=searchValuess()>ok</button> 
`
}

function searchValuess(){

    let value = document.getElementById('searchValue').value

    const divs = document.querySelectorAll('.oneNode');

    let array = []
    divs.forEach(node => {
        const value = node.querySelector('.value').textContent;
        const address = node.querySelector('.address').textContent;

        array.push({
            value: Number(value),
            address: address
        });
    });

    let isFound = array.find(item => item.value === Number(value));

    let index = array.findIndex((item) => item === isFound)

    let limit;
    index===-1? limit = array.length : limit = index + 1

    let note_pad = document.getElementById('note_pad')

    note_pad.innerHTML = `
    <p style="font-size:16px; margin-bottom:0px">Traverse until we find ${value}</p>
`;

    for (let i = 0; i < limit; i++) {
        setTimeout(() => {
            if (document.getElementById(`value${i}`)) {
                document.getElementById(`value${i}`).style.backgroundColor = '';
            }

            document.getElementById(`value${i + 1}`).style.backgroundColor = 'chocolate';

            if (i===limit-1) {
                

                showAlert(index, limit)
            } else {
                note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">Traverse until we find ${value}</p>
                `;
            }
        }, i * 1200);
    }

}

function showAlert(index, limit){
    
    let value = document.getElementById('searchValue').value
    
    let note_pad = document.getElementById('note_pad')

    setTimeout(()=>{
      if(index===-1){
        document.getElementById(`value${limit}`).style.backgroundColor = ''
        note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">No such value found!</p>
                `;
        setTimeout(() => {
            enableBtns()
            document.getElementById('searchValue').removeAttribute('readOnly')
        }, 2000);
      }else{

        document.getElementById(`value${limit}`).style.backgroundColor = 'green'
        note_pad.innerHTML = `
                    <p style="font-size:16px; margin-bottom:0px">${value} is found!</p>
                `;

        setTimeout(()=>{
           document.getElementById(`value${limit}`).style.backgroundColor = ''
           enableBtns()
           document.getElementById('searchValue').removeAttribute('readOnly')

           let note_pad_div = document.getElementById('note_pad_div')
           note_pad_div.style.display = 'none'
       
           let note_pad = document.getElementById('note_pad').innerHTML = ''
        },2000)        

      }
    },1000)
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
}