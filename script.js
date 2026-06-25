const countText = document.querySelector(".count p");
const incrementBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset");


let count = 0;


// count button

incrementBtn.addEventListener("click", ()=>{

    count++;

    countText.textContent = count;

});




// reset button

resetBtn.addEventListener("click", ()=>{

    count = 0;

    countText.textContent = count;

});