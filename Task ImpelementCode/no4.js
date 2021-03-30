const divideAndSort = num => {
  if (typeof !num == "number") {
    console.log('bukan number')  
  } else {
    const toString = num.toString()
    const split = toString.split('0')
    const map = split.map(number => {
      return number.split('').sort().join('')
    })
    const hasil = map.join('')
    console.log(hasil)
  }
}

divideAndSort(5956560159466056)