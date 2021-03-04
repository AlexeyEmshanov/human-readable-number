module.exports = function toReadable (number) {
    const data = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
        20 : "twenty",
        30 : "thirty",
        40 : "forty",
        50 : "fifty",
        60 : "sixty",
        70 : "seventy",
        80 : "eighty",
        90 : "ninety",
      }
      
      let hundreds, tens, units
      
      switch (true) {
        case (number <= 19) : 
          return data[number];
        
        case ( (20 <= number) && (number <= 99) ) :
          if (number % 10 === 0) {
            return data[number]
          } else {
            units = number % 10
            tens = Math.floor(number / 10)
            return data[tens * 10] + " " + data[units]
          }
        
        case (number >= 100) :
          if (number % 100 === 0) {
            return data[number / 100] + " hundred"
            break
          } else {
            hundreds = Math.floor(number / 100)
            tens = number - hundreds * 100
            console.log(tens)
            if (tens % 10 === 0) {
              return data[hundreds] + " hundred " + data[tens]
            } else if ( (1 <= tens) && (tens <= 19) ) {
              return data[hundreds] + " hundred " + data[tens]
            } else {
              tens = Math.floor(tens / 10)
              units = number - hundreds * 100 - tens * 10
              return data[hundreds] + " hundred " + data[tens * 10] + " " + data[units]
            }
          }
      }
}