//nodov api za rad s putanjama - ako negdje trebamo dati apsolutnu putanju, možemo s tim apijem saznati koja je to putanja
const path = require("path");


//1) Napravit ćemo jednostavnu konfiguraciju koja će uzeti filove iz ulazne datoteke i ispist će ih van u jednu izlaznu datoteku - bundlat će ih van - pomoću nekoliko jednostavnih konfiguracijskih properia
//2) Bitno je znati gdje će nam se nalaziti ulazne datoteke i izlazne datoteke, često je izvorni kod smješten u mapi pod nazivom src (kreiramo ju), entry- relativna putanja u odnosu na file webpack.config.js
module.exports = {
    // ovisi u koju svrhu koristimo, za development ili produkciju, neki stave dvije konfiguracije, neki stave environment varijablu pa ju pročitati u nodu sa proces.env i tako vidjeti jel smo u developmentu ili produkciji
    mode: "development",
    //entry: "./src/index.js",
    // traži putanju u odnosu na trenutnu map, traži src i index.js u toj mapi
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        //ima output fila
        filename: "bundle.js",
        // riječ je o putanje a ne o mapi ko u entry
        path: path.resolve(__dirname, "dist"),
    },
};