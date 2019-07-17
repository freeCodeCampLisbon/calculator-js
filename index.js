let button = "";

function insert(btn) {
    button = button + btn.value;
    console.log(button);
    document.getElementById('showvalue').innerHTML = button;
}

function result() {
    document.getElementById('showvalue').innerHTML = eval(button);
}

function reset() {
    document.getElementById('showvalue').innerHTML = "0";
    button = "";
}

function goBack() {
    button = button.slice(0, -1);

    if(button == ""){
        return document.getElementById('showvalue').innerHTML = "0";
    }
    else{
        return document.getElementById('showvalue').innerHTML = button;
    }
}