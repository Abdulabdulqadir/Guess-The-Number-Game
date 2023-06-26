var random = Math.floor(Math.random() * 100 + 1)
var input = document.getElementById("inp")
var names = document.getElementById("name")
var trying = document.getElementById("try")
var tries = 10
function submit() {
    var inputText = input.value
    tries = tries - 1
    if (random < inputText ) {
        names.innerHTML = "Too High ";
    }
    else if (random > inputText) {
        names.innerHTML = "Too Low "
    }
    else {
        names.innerHTML = "Correct "
        location.reload()
    }
    if (tries >= 0) {
        trying.innerHTML = tries
    }
    else {
        alert("All Tries Used")
        location.reload()
    }
}