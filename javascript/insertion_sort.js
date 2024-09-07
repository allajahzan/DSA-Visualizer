// on page load

function loadPage(){

    document.getElementById('refresh').style.display = 'none'
    let sorting_btn = document.getElementById('sorting_btn');
    sorting_btn.innerHTML = `<i
                    class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Sort`;

    sorting_btn.removeAttribute('disabled')

    let array = generateRandomArray(10)

    for (let i = 0; i < array.length; i++) {
        let val = array[i] * 2.5 + 20
        document.getElementById(`graph${i}`).style.height = `${val}px`
        document.getElementById(`graph${i}`).innerHTML = array[i]
        document.getElementById(`graph${i}`).style.backgroundColor = ''
    }
    
}

//  generate array

function generateRandomArray(size) {

    let randomArray = [];

    for (let i = 0; i < size; i++) {
        // Generate a random number between 10 and 100
        let randomNum = Math.floor(Math.random() * (99 - 20)) + 10;
        randomArray.push(randomNum);
    }
    return randomArray;
}


//  insertion 
async function insertionSort() {

    let sorting_btn = document.getElementById('sorting_btn');
    sorting_btn.innerHTML = `<i
                    class="fa-solid fa-pause"></i>&nbsp;&nbsp;Sorting`;

    sorting_btn.setAttribute('disabled', 'disabled')

    document.getElementById('refresh').style.display = 'none'


    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;margin-bottom:0px">Compare adjescent values</p>
    `


    // ṃake array from html 
    const divs = document.querySelectorAll('.sort_value_div');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let delay = 800;


    for (let i = 1; i < array.length; i++) {

        let distance = 58

        document.getElementById(`graph${i - 1}`).style.backgroundColor = 'orange'

        let key = array[i];
        let keyElement = document.getElementById(`graph${i}`);

        // highlight and move the key element down

        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'

        let note_pad = document.getElementById('note_pad')
        note_pad.innerHTML = `
        <p style="font-size:16px;margin-bottom:0px">Take next value as key</p>`

        await new Promise((resolve) => {
            setTimeout(() => {
                keyElement.style.backgroundColor = 'rgb(220, 20, 60)';
                keyElement.style.position = 'relative'
                keyElement.style.top = '280px';
                resolve();
            }, delay);
        });

        let j = i - 1;



        // swap values from left to right 
        while (j >= 0 && array[j] > key) {

            
            note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px">Insert key to it's correct position</p>`

            document.getElementById(`graph${j}`).style.backgroundColor = 'green'
            // document.getElementById(`graph${j+1}`).style.backgroundColor = 'orange'
            
            await new Promise((resolve) => {
                setTimeout(() => {

                    array[j + 1] = array[j];
                    

                    resolve();
                }, 800);
            });

            document.getElementById(`graph${j}`).style.position = 'relative'
            document.getElementById(`graph${j}`).style.left = `${58}px`
            document.getElementById(`graph${j}`).style.backgroundColor = 'orange'
            

            keyElement.style.right = `${distance}px`
            distance += 58
            j--;
        }

        note_pad.innerHTML = `
        <p style="font-size:16px;margin-bottom:0px">Key inserted to it's correct position.</p>`

        array[j + 1] = key;

        

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 800);
        });

        keyElement.style.top = '0px'
        keyElement.style.backgroundColor = 'orange'
       

        note_pad.innerHTML = `
        <p style="font-size:16px;margin-bottom:0px">Orange colored values are the sorted ones.</p>`

        makeGraph(array, i)

    }

    
    let note_pad_div = document.getElementById('note_pad_div')
    note_pad_div.style.display = 'block'
    note_pad.innerHTML = `
    <p style="font-size:16px;margin-bottom:0px">Array is sorted in ascending order.</p>`


    setTimeout(() => {

        let sorting_btn = document.getElementById('sorting_btn');
        sorting_btn.innerHTML = `<i
                        class="fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;Sorted`; 
    
        document.getElementById('refresh').style.display = 'block'
        makePreviusColor()
        
    }, delay+2000);



}


// make graph
function makeGraph(array, k) {
    let html = ``
    for (let i = 0; i < array.length; i++) {

        let val = array[i] * 2.5 + 20
        if (i <= k) {

            html += ` <div id="graph${i}" style="height:${val}px; background-color:orange;" class="sort_value_div">
                        ${array[i]}
                    </div>`
        } else {
            html += ` <div id="graph${i}" style="height:${val}px;" class="sort_value_div">
            ${array[i]}
        </div>`
        }
    }

    document.getElementById('graph_body').innerHTML = html
}


// remove background color
function makePreviusColor(){
    // ṃake array from html 
    const divs = document.querySelectorAll('.sort_value_div');
    const totalDivs = divs.length;

    for (let i = 0; i < totalDivs; i++) {
        document.getElementById(`graph${i}`).style.backgroundColor = ''
    }
}


// refersh
function refersh(){
    loadPage()
}
