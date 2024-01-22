function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    let c = document.getElementById('c').value;
    let f = (c * 9/5) + 32
    document.getElementById('f').value = f;
}

function weight(){
    let k = document.getElementById('k').value;
    let p = k * 2.2;
    document.getElementById('p').value = p;
}

function distance(){
    let km = document.getElementById('km').value;
    let mi = km * 0.62137;
    document.getElementById('mi').value = mi;
}