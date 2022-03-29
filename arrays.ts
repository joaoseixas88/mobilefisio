
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

// console.log(getRandomInt(12,15))

export function criarData(){
  
    const Array: Date[] = [] 

    const year = getRandomInt(1999, 2050)
    const month = getRandomInt(0,11)
    const day = month == 1 ? getRandomInt(0,28) : getRandomInt(0,30)
    const hour = getRandomInt(0,59)
    const millisecond = getRandomInt(0,999)

    for (let i = 0; i < 5; i++) {
      Array.push(new Date(
        getRandomInt(1999, 2050),
        getRandomInt(0,11),
        getRandomInt(0,28),
        getRandomInt(0,59),
        getRandomInt(0,999)
      ))
      
    }
    
    return Array
}


console.log(criarData())


// function getterDateValues(dates){  
    
//     let bigger = dates[0].getFullYear()
//     let smaller = dates[0].getFullYear()
    
//     dates.map((date) => {
//         const newDate = new Date(date)

//         if (newDate.getFullYear() > bigger){
//           bigger = newDate.getFullYear()
//         }
//         if(newDate.getFullYear() < smaller){
//           smaller = newDate.getFullYear()
//         }
//     })
//     return {
//       bigger: bigger,
//       smaller: smaller
//     }
//   }

//   console.log(getterDateValues(Array))


// console.log(maparray(Array))

// const datee = new Date(`2023-11-03T17:38:38.484Z`)

// console.log(datee.getMonth())