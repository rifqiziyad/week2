const arkFood = (harga, voucher, jarak, pajak) => { 
  const potongan = diskon(harga, voucher)
  const biayaAntar = kirim(jarak)
  const pajakPpn = ppn(pajak, harga)

  if (typeof potongan == 'string') {
    console.log(potongan) 
  } else {
      console.log(`Harga = ${harga}
Potongan = ${potongan}
Biaya Antar = ${biayaAntar}
Pajak = ${pajakPpn}
Sub Total = ${harga - potongan + biayaAntar + pajakPpn}`)
  }
  
}

arkFood(75000, 'ARKFOOD5', 5, true)


function diskon(harga, voucher) {
  if (voucher === 'ARKFOOD5') {
    if (harga >= 50000) {
      return harga - harga * 50/100
    } else {
      return 'Minimal 50 ribu untuk menggunakan voucher ini'
    }
  } else if ( voucher === 'DITRAKTIRDEMY') {
    if (harga >=  25000) {
      return harga - harga * 60/100
    } else {
      return 'Minimal 25 ribu untuk menggunakan voucher ini'
    }
  } else {
    return 0
  }
}

function kirim (jarak) {
  if (jarak <= 2) {
    return 5000
  } else {
    return (jarak - 2) * 3000 + 5000
  }
}

function ppn (pajak, harga) {
  if (pajak === true) {
    return harga * 5/100
  } else {
    return 0
  }
}

