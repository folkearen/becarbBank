/*
-funcion que registre el codigo y la nominacion del billeta, podria ser un objeto
-Una funcion que compruebe y confirtme  el codigo del billete, muestre valides y denominacion y elemine de los codigos diponibles y lso transfiera a usados
-Una funcion que pueda tomar los codigosusados y llevarlos nuevamente a utilibles
*/
import {crearBB, bCCirculacion} from './firebase.js'


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

const enCiruclacion = document.getElementById("enCirculacion");
const fueraCirulacion = document.getElementById("fueraCirculacion")
//const btn_actualizarDivisasActivas = document.getElementById("btn_actualizarActivos")


const crearBecarbCoin = async() =>{
    //becarbCoin[datoACrearBC.value] = datoADenominarBC.value; 
    let listarBCAlmacenados =[]
    let listarBCAlmacenadosExtend =[]
    const codigosBCAlmacenados = await bCCirculacion();
    codigosBCAlmacenados.forEach(doc => listarBCAlmacenados.push((doc.data().codigoBecarbCoin)));
    console.log(listarBCAlmacenados)
    codigosBCAlmacenados.forEach(doc => listarBCAlmacenadosExtend.push((doc.data())));
    if(listarBCAlmacenados.includes(datoACrearBC.value)){
        msnCreador.innerHTML = `<p style="color:white; background-color:red; display:inline"><span style="font-weight:bold">¡ERROR!</span> Becarb Coin ${datoACrearBC.value} ya existe</p>`;
    }else {
        crearBB(datoACrearBC.value, datoADenominarBC.value) 
        msnCreador.innerHTML = `<p style="color:white; background-color:green; display:inline">Becarb Coin ${datoACrearBC.value} añadido<span style="font-weight:bold" >¡EXITOSAMENTE!</span></p>`;  
    }
    //console.log(becarbCoin)
}

 const comprobarBecarbCoin = () => {
    
    // if(Object.keys(becarbCoin).includes(comprobadorBC.value)){
    //     utilizadoBC[comprobadorBC.value] = becarbCoin[comprobadorBC.value];
    //     msnComprobar.innerText = `Becarb Coin de $${becarbCoin[comprobadorBC.value]} validado` 
    //     delete becarbCoin[comprobadorBC.value];
    //     console.log(becarbCoin)
    //     console.log(utilizadoBC)
}

const reutilizaBC = () => {
    // if(Object.keys(utilizadoBC).includes(reutilizadorBC.value)) {
    //     becarbCoin[reutilizadorBC.value] = utilizadoBC[reutilizadorBC.value];
    //     msnReutilizar.innerText = `Becarb Coin ${reutilizadorBC.value} listo para ser usado nuevamente`
    //     delete utilizadoBC[reutilizadorBC.value];
    //     console.log(becarbCoin)
    //     console.log(utilizadoBC)
    // }
}

// const listaBCEnFueraCirculacion = () => {
//     console.log("a")
// }

btn_crearBC.addEventListener('click',crearBecarbCoin);
btn_comprobadorBC.addEventListener('click', comprobarBecarbCoin);
btn_reutilizarBC.addEventListener('click', reutilizaBC);
//btn_actualizarDivisasActivas.addEventListener("click",listaBCEnFueraCirculacion )

