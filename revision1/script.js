function m() {
    var a = document.getElementById("1").value;
    var b = document.getElementById("2").value;

    var c = parseInt(a) + parseInt(b);

    document.getElementById("t").innerHTML = c;
}