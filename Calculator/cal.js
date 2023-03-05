function dis(val) {
    document.getElementById("text").value += val
}
function clr() {
    document.getElementById("text").value = ""
}
function sol() {
    let x = document.getElementById("text").value
    let y = eval(x)
    document.getElementById("text").value = y
}

