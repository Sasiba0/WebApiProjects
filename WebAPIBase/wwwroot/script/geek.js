var viccek;
window.onload = function Main()
{
    letoltes();
}

function letoltes()
{
    fetch("jokes.json")
        .then(response => response.json())
        .then(data => letoltesbef(data))
}

function letoltesbef(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    viccek = d;
    for (var i = 0; i < d.length; i++) {
        var kerdes = document.createElement("div");
        kerdes.innerText = JSON.stringify(d[i]['question']);
        var valasz = document.createElement("div");
        valasz.innerText = JSON.stringify(d[i]['answer']);
        document.body.appendChild(kerdes, valasz);
        
    }
    
}