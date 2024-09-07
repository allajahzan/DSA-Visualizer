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



// start bubble sort
async function bubbleSort() {

    let sorting_btn = document.getElementById('sorting_btn');
    sorting_btn.innerHTML = `<i
                    class="fa-solid fa-pause"></i>&nbsp;&nbsp;Sorting`; 

    sorting_btn.setAttribute('disabled','disabled')

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


    let n = array.length;
    let delay = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            // Highlight the elements
            setTimeout(() => {
                document.getElementById(`graph${j}`).style.backgroundColor = 'green';
                document.getElementById(`graph${j + 1}`).style.backgroundColor = 'green';
            }, delay);

            // Swap the elements if necessary
            setTimeout(() => {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;

                    // Apply transition animation
                    let div1 = document.getElementById(`graph${j}`);
                    let div2 = document.getElementById(`graph${j + 1}`);

                    div1.style.transition = 'height 0.2s';
                    div2.style.transition = 'height 0.2s';

                    div1.innerHTML = array[j];
                    div1.style.height = `${array[j] * 2.5 + 20}px`;

                    div2.innerHTML = array[j + 1];
                    div2.style.height = `${array[j + 1] * 2.5 + 20}px`;


                    // message
                    let note_pad_div = document.getElementById('note_pad_div')
                    note_pad_div.style.display = 'block'
            
                    let note_pad = document.getElementById('note_pad')
                    note_pad.innerHTML = `
                    <p style="font-size:16px;margin-bottom:0px">Swap ${array[j]} and ${array[j+1]}</p>
                    `
                    
                }else{
                    let note_pad_div = document.getElementById('note_pad_div')
                    note_pad_div.style.display = 'block'
            
                    let note_pad = document.getElementById('note_pad')
                    note_pad.innerHTML = `
                    <p style="font-size:16px;margin-bottom:0px">Compare adjescent values</p>
                    `
                }
            }, delay + 500);

            // Unhighlight elements and prepare for the next comparison
            setTimeout(() => {
                document.getElementById(`graph${j}`).style.backgroundColor = '';
                document.getElementById(`graph${j + 1}`).style.backgroundColor = '';
                if (j + 2 < n - i) {
                    document.getElementById(`graph${j + 1}`).style.backgroundColor = 'green';
                    document.getElementById(`graph${j + 2}`).style.backgroundColor = 'green';
                }
            }, delay + 1000);

            delay += 1500; 
        }

        // Highlight the sorted element
        setTimeout(() => {  

            document.getElementById(`graph${n - i - 1}`).style.backgroundColor = 'orange';

            let note_pad_div = document.getElementById('note_pad_div')
            note_pad_div.style.display = 'block'
    
            let note_pad = document.getElementById('note_pad')
            note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px"">${array[n - i - 1]} is sorted.</p>
            `
        }, delay - 480);

    
        delay+=200
    }

    // Ensure the first element is also highlighted when sorted

    setTimeout(() => {
        document.getElementById(`graph0`).style.backgroundColor = 'orange';
        note_pad.innerHTML = `
            <p style="font-size:16px;margin-bottom:0px"">${array[0]} is sorted.</p>`
    }, delay + 200);

    
    setTimeout(() => {
        note_pad.innerHTML = `
    <p style="font-size:16px;margin-bottom:0px"">Array is sorted in ascending order.</p>
    `
    }, delay + 1500);

    setTimeout(() => {
      
        let note_pad_div = document.getElementById('note_pad_div')
        note_pad_div.style.display = 'block'


        let sorting_btn = document.getElementById('sorting_btn');
        sorting_btn.innerHTML = `<i
                        class="fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;Sorted`; 
    
        document.getElementById('refresh').style.display = 'block'
        
        makePreviusColor()

    }, delay + 4000);
    

}

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
