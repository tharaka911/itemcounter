let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let cumCountEl = document.getElementById("total-el")
let cumCount = 0
function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0

    cumCount +=count
    cumCountEl.textContent ="Total Items : "+cumCount

    count = 0
}


