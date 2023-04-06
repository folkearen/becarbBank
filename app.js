/*
-funcion que registre el codigo y la nominacion del billeta, podria ser un objeto
-Una funcion que compruebe y confirtme  el codigo del billete, muestre valides y denominacion y elemine de los codigos diponibles y lso transfiera a usados
-Una funcion que pueda tomar los codigosusados y llevarlos nuevamente a utilibles
*/



const datoACrearBC = document.querySelector("#creador");
const datoADenominarBC = document.querySelector("#valor");
const btn_crearBC = document.querySelector("#btn_crear");
const msnCreador = document.querySelector("#textCreadorMsn");

const comprobadorBC = document.querySelector("#comprobador");
const btn_comprobadorBC = document.querySelector("#btn_comprobar");
const msnComprobar = document.querySelector("#textComprobadorMsn");

const reutilizadorBC = document.querySelector("#reutilizador");
const btn_reutilizarBC = document.querySelector("#btn_reutilizar");
const msnReutilizar = document.querySelector("#textReutilizadorMsn");


let becarbCoin = {};
let utilizadoBC = {};

const crearBecarbCoin = () =>{
    becarbCoin[datoACrearBC.value] = datoADenominarBC.value;
    msnCreador.innerText = `Becarb Coin ${datoACrearBC.value} añadido extiosamente` 
    console.log(becarbCoin)

}

 const comprobarBecarbCoin = () => {
    if(Object.keys(becarbCoin).includes(comprobadorBC.value)){
        utilizadoBC[comprobadorBC.value] = becarbCoin[comprobadorBC.value];
        msnComprobar.innerText = `Becarb Coin de $${becarbCoin[comprobadorBC.value]} validado` 
        delete becarbCoin[comprobadorBC.value];
        console.log(becarbCoin)
        console.log(utilizadoBC)
    }
}

const reutilizaBC = () => {
    if(Object.keys(utilizadoBC).includes(reutilizadorBC.value)) {
        becarbCoin[reutilizadorBC.value] = utilizadoBC[reutilizadorBC.value];
        msnReutilizar.innerText = `Becarb Coin ${reutilizadorBC.value} listo para ser usado nuevamente`
        delete utilizadoBC[reutilizadorBC.value];
        console.log(becarbCoin)
        console.log(utilizadoBC)
    }
}

btn_crearBC.addEventListener('click', crearBecarbCoin);
btn_comprobadorBC.addEventListener('click', comprobarBecarbCoin);
btn_reutilizarBC.addEventListener('click', reutilizaBC);

/*crearBecarbCoin("AA1", 50);
crearBecarbCoin("AA2", 150);
crearBecarbCoin("AA3", 150);
console.log(becarbCoin)
comprobarBecarbCoin("AA1")
console.log(becarbCoin)
console.log(utilizadoBC)
comprobarBecarbCoin("AA2")
console.log(becarbCoin)
console.log(utilizadoBC)
reutilizaBC("AA1")
console.log(becarbCoin)
console.log(utilizadoBC)
reutilizaBC("AA2")
console.log(becarbCoin)
console.log(utilizadoBC)*/