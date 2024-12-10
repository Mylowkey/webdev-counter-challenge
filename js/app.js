"using strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");



function incrementCount() {
        // console.log("clicked") check the button works

// let count = document.getElementsByClassName("count") Do I need this?

count = count + 1
count.innerText = count
// console.log(count)
}
// incrementCount()


function decrementCount() {
    // Write the relevant code in this block
    let count = count - 1
    console.log(count)
    }
    count()



function resetCount() {
    // Write the relevant code in this block
    let count = count * 0
    console.log(count)
    }
    count()


function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    // Write code below this line



    // STOP HERE


    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    // Write code below this line
    

    // STOP HERE
    
    
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    // Write code below this line


    // STOP HERE


    renderUpdatedCount();
});
