// on page load

function loadPage() {

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


function changeArraySize() {

}

// generate array

function generateRandomArray(size) {

    let randomArray = [];

    for (let i = 0; i < size; i++) {
        // Generate a random number between 10 and 100
        let randomNum = Math.floor(Math.random() * (99 - 20)) + 10;
        randomArray.push(randomNum);
    }
    return randomArray;
}


async function selectionSort() {
    let sorting_btn = document.getElementById('sorting_btn');
    sorting_btn.innerHTML = `<i
                    class="fa-solid fa-pause"></i>&nbsp;&nbsp;Sorting`;

    sorting_btn.setAttribute('disabled', 'disabled')

    document.getElementById('refresh').style.display = 'none'


    let note_pad = document.getElementById('note_pad')
    note_pad.innerHTML = `
    <p style="font-size:16px;margin-bottom:0px">Find minimum value.</p>
    `


    // ṃake array from html 
    const divs = document.querySelectorAll('.sort_value_div');
    const totalDivs = divs.length;

    let array = []
    for (let i = 0; i < totalDivs; i++) {
        array.push(Number(divs[i].innerText))
    }

    let n = array.length;

    let delay = 800;

    for (let i = 0; i < n; i++) {

        document.getElementById(`graph${i}`).style.backgroundColor = 'rgb(220, 20, 60)'

        let minIndex = i;

        // find minimum
        for (let j = i + 1; j < n; j++) {

            note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px">Find the minimum value.</p>
            `

            await new Promise((resolve) => {
                setTimeout(() => {
                    document.getElementById(`graph${j}`).style.backgroundColor = 'green'
                    resolve();
                }, delay);
            });


            if (array[j] < array[minIndex]) {
                document.getElementById(`graph${minIndex}`).style.backgroundColor = ''
                minIndex = j;
                document.getElementById(`graph${j}`).style.backgroundColor = 'rgb(220, 20, 60)'

            }

            if (document.getElementById(`graph${j - 1}`).style.backgroundColor !== 'rgb(220, 20, 60)') {
                document.getElementById(`graph${j - 1}`).style.backgroundColor = ''
            }

        }

        note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px">${array[minIndex]} is the minimum value.</p>
            `



        // Swap 
        if (minIndex !== i) {

            await new Promise((resolve) => {
                setTimeout(() => {

                    // last div color remove
                    if(minIndex!=array.length-1){
                        document.getElementById(`graph${array.length - 1}`).style.backgroundColor = ''
                    }


                    document.getElementById(`graph${i}`).style.backgroundColor = 'rgb(220, 20, 60)'
                    resolve()
                }, delay + 100);
            })

            
            note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px">swap ${array[minIndex]} and ${array[i]}.</p>`


            await new Promise((resolve) => {
                setTimeout(() => {


                    // min
                    document.getElementById(`graph${i}`).style.backgroundColor = 'rgb(220, 20, 60)'
                    document.getElementById(`graph${i}`).style.transition = 'height 0.2s';
                    document.getElementById(`graph${i}`).innerHTML = array[minIndex]
                    document.getElementById(`graph${i}`).style.height = `${array[minIndex] * 2.5 + 20}px`

                    // swaped value
                    document.getElementById(`graph${minIndex}`).style.backgroundColor = 'rgb(220, 20, 60)'
                    document.getElementById(`graph${minIndex}`).style.transition = 'height 0.2s';
                    document.getElementById(`graph${minIndex}`).innerHTML = array[i]
                    document.getElementById(`graph${minIndex}`).style.height = `${array[i] * 2.5 + 20}px`


                    resolve();
                }, delay + 200);
            });


            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 800);
            });

            // make graph
            makeGraph(array, i)


        } else {

            await new Promise((resolve) => {
                setTimeout(() => {

                    // last div color remove
                    document.getElementById(`graph${array.length - 1}`).style.backgroundColor = ''
                    document.getElementById(`graph${i}`).style.backgroundColor = 'orange'
                    resolve();

                }, delay + 200);
            });

            // make graph
            makeGraph(array, i)

        }

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

    }, delay + 2000);

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
function makePreviusColor() {
    // ṃake array from html 
    const divs = document.querySelectorAll('.sort_value_div');
    const totalDivs = divs.length;

    for (let i = 0; i < totalDivs; i++) {
        document.getElementById(`graph${i}`).style.backgroundColor = ''
    }
}


// refersh
function refersh() {
    loadPage()
}
