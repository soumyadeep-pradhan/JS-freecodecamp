
// let count = 0;
// function increment() {
//     count++;
    
//     document.getElementById("count-el").innerText=count;
// }
let countEl = document.getElementById("count-el")
let saveEl  = document.getElementById("save-el")
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0

}
