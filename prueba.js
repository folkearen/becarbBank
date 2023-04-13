let a = [ {denominacionBecarbCoin: '11111111111', codigoBecarbCoin: 'AA3'},
            {codigoBecarbCoin: 'AA2', denominacionBecarbCoin: '24'},
            {codigoBecarbCoin: 'AA1', denominacionBecarbCoin: '10'},
            {denominacionBecarbCoin: '1234', codigoBecarbCoin: 'AA6'},
             {codigoBecarbCoin: 'AA5', denominacionBecarbCoin: '12'},
              {codigoBecarbCoin: 'AA7', denominacionBecarbCoin: '34324'}]
let x = "AA5"
let b = a.filter(coin => coin.codigoBecarbCoin === x);
let res = `Becar coin valido con un valor de $${b[0].denominacionBecarbCoin}`
console.log(res)