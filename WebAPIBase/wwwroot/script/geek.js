var viccek;
window.onload = function Main()
{
    letoltes();
}

function letoltes()
{
    fetch("viccek.json")
        .then(answer => answer.json())
        .then(data => letoltesbef(data))
}

function letoltesbef(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    viccek = d;
    for (var i = 0; i < viccek; i++)
    {

    }

}