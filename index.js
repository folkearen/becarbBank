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
const switchBtn = document.querySelector('.switch input[type="checkbox"]');

// const fueraCirulacion = document.getElementById("fueraCirculacion")
// const btn_actualizarDivisasActivas = document.getElementById("btn_actualizarActivos")
// const btn_ocultarDivisasActivas = document.getElementById("btn_ocultarActivos")


const crearBecarbCoin = async() =>{
    //becarbCoin[datoACrearBC.value] = datoADenominarBC.value; 

    let listarBCAlmacenados =[]
    //let listarBCAlmacenadosExtend =[]
    const codigosBCAlmacenados = await bCCirculacion();
    codigosBCAlmacenados.forEach(doc => listarBCAlmacenados.push((doc.data().codigoBecarbCoin)));
    //console.log(listarBCAlmacenadosExtend)
    //codigosBCAlmacenados.forEach(doc => listarBCAlmacenadosExtend.push((doc.data())));
    if(datoACrearBC.value === "" ||  datoADenominarBC.value < 1) {
        msnCreador.innerHTML = `<p style="color:white; background-color:red; display:inline"><span style="font-weight:bold">\u00A0 \u00A0¡ERROR!</span> Los campos no puedeb estar vacios\u00A0 \u00A0</p>`;
        setTimeout(() => {
            msnCreador.innerText = " " ; }, "5000");

    }else if(listarBCAlmacenados.includes(datoACrearBC.value)){
        msnCreador.innerHTML = `<p style="color:white; background-color:red; display:inline"><span style="font-weight:bold">\u00A0 \u00A0¡ERROR!</span> Ceinted Coin ${datoACrearBC.value} ya existe\u00A0 \u00A0</p>`;
        setTimeout(() => {
            msnCreador.innerText = " " ; 
            datoACrearBC.value = "";
            datoADenominarBC.value = ""}, "5000");
    }else {
        crearBB(datoACrearBC.value, datoADenominarBC.value) 
        msnCreador.innerHTML = `<p style="color:white; background-color:green; display:inline">\u00A0 \u00A0Ceinted Coin ${datoACrearBC.value} añadido<span style="font-weight:bold" >¡EXITOSAMENTE!\u00A0 \u00A0</span></p>`;  
        setTimeout(() => {
            msnCreador.innerText = " " ; 
            datoACrearBC.value = "";
            datoADenominarBC.value = ""}, "5000");
    }

}
const listarActivosBc = async _ =>  {
    if (switchBtn.checked) {
        const codigosBCAlmacenados = await bCCirculacion();
        let listarBCAlmacenadosExtend =[]
        codigosBCAlmacenados.forEach(doc => listarBCAlmacenadosExtend.push((doc.data())));
        enCiruclacion.innerText = ` Total de Ceinted Coin en circulacion: ${listarBCAlmacenadosExtend.length}\n \n  ` 
        listarBCAlmacenadosExtend.forEach((elemet) => {
            enCiruclacion.innerText += `${elemet.codigoBecarbCoin} : $${elemet.denominacionBecarbCoin} \u00A0 \u00A0 ` })
    } else {
        enCiruclacion.innerText = "" 
    }
  };

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
switchBtn.addEventListener('change', listarActivosBc)
// btn_reutilizarBC.addEventListener('click', reutilizaBC);
// btn_actualizarDivisasActivas.addEventListener('click',listarBCcirculantes )
// btn_ocultarDivisasActivas.addEventListener('click', ocultarListaBCcirculantes)

