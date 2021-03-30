const palindrom = kata => {
  const lowercase = kata.toLowerCase()
  const reverse = lowercase.split('').reverse().join('')
  if (reverse === lowercase) {
    console.log('Palindrom')
  } else {
    console.log('Bukan Palindrom')
  }
}

palindrom('Kasur Rusak')
