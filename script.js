let result = document.getElementById("result")

function del() {
    result.value = result.value
    .slice(0, -1)
}

function clearScreen(){
    result.value = "";
}

function display(num){
    result.value += num
}

function calculate() {
    var t = document.getElementById("result").value;
    var q = eval(t);
    document.getElementById("result").value = q;
}


