const reverseWord = kalimat => {
  const array = kalimat.split(' ')
  let hasil = ''
  for (i = array.length - 1; i >= 0 ; i--) {
    hasil += array[i] + ' '
  }
  console.log(hasil)
}

reverseWord('Saya belajar Javascript')