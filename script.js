let result = document.getElementById("display")

function del() {
    result.value = result.value
    .slice(0, -1)
}

function limpyo(){
    result.value = "";
}

function display(num){
    if ((result.value.indexOf('.') !== -1) && (num == '.')) return
    result.value += num
}

function calculate() {

    var t = document.getElementById("display").value;
    var q = eval(t);
    document.getElementById("display").value = q;


}


