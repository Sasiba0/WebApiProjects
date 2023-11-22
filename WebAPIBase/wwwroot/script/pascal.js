window.onload = function ()
{
    initpascal(10);
}

var initpascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var ujdivsor = document.createElement("div");
        //új div osztálylistájához add hozzá a "sor"-t
        ujdivsor.classList.add("sor");
        //új div-et add hozzá a "pascal" gyermekeihez
        document.getElementById("pascal").appendChild(ujdivsor);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujdivelem = document.createElement("div");
            //új elem div osztálylistájához add hozzá az "elem"-et
            ujdivelem.classList.add("elem");
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            ujdivelem.innerHTML = `${faktorialis(sor)/(faktorialis(oszlop)*faktorialis(sor - oszlop))}`;
            //új elem div-et vedd fel a sor elemei közé
            ujdivsor.appendChild(ujdivelem);
        }
    }

}

function faktorialis(n) {
    if (n == 0 || n == 1) { return 1 }
    return n * faktorialis(n-1)

    }