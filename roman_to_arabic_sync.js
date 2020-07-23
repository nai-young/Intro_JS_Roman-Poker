'use strict'

const fs = require('fs')
const data = fs.readFileSync('values.txt', 'utf-8')
const dataArray = data.split('\n')

function toRoman (num) {
  const romanList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  const limit = 3
  let roman = ''
  let arabic = 0
  let key

  if (typeof num === 'string') {
    arabic = 0
    const RomanToArabic = num.split('')

    const isValid = () => {
      return !RomanToArabic.some((char) => (
        RomanToArabic.filter((ch) => ch === char).length > limit
      ))
    }
    console.log(isValid(RomanToArabic))
    if (isValid(RomanToArabic) === true) {
      RomanToArabic.map(value => {
        for (const romanNum in romanList) {
          if (value === romanNum) {
            arabic += romanList[romanNum]
          }
        }
      })
      return arabic
    } else {
      return 'Error, a Roman number repeats more than 3 times.'
    }
  } else {
    if (num < 1 || num > 3999) {
      return 'Enter a valid number between 1 - 3999'
    } else {
      for (key in romanList) {
        while (num >= romanList[key]) {
          roman += key
          num -= romanList[key]
        }
      }
      return roman
    }
  }
}

// Add external file values
let finalResult = ''
dataArray.map(number => {
  const romanToNumber = parseInt(number)
  if (romanToNumber) {
    const result = toRoman(romanToNumber)
    finalResult += result + '\n'
  } else {
    const result = toRoman(number)
    finalResult += result + '\n'
  }
})
fs.writeFileSync('roman_numbers_result.txt', 'Result: ' + '\n' + finalResult)
