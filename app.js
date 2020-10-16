// slowMath
//   .add(1, 1)
//   .then((sum) => {
//     console.log(`the sum is ${sum}`);
//     return slowMath.multiply(sum, 2);
//   })
//   .then((product) => {
//     console.log(`the product is ${product}`);
//     return slowMath.divide(product,4)
//   })
//   .then((quotient)=>{
//       console.log(`the quotient is ${quotient}`)
//       return slowMath.subtract(quotient, 3)
//   })
//   .then((subtractor)=>{
//       console.log(`the subtractor is ${subtractor}`)
//       return slowMath.add(subtractor,98)
//   })
//   .then((sum)=>{
//       console.log(`the sum is ${sum}`)
//       return slowMath.remainder(sum,2)
//   })
//   .then((product)=>{
//     console.log(`the product is ${product}`)
//     return slowMath.multiply(product,50)
//   })
//   .then((remainder)=>{
//     console.log(`the remainder is ${remainder}`)
//     return slowMath.remainder(remainder,40)
//   })
//   .then((sum)=>{
//     console.log(`the sum is ${sum}`)
//     return slowMath.add(sum,32)
//   }).then((results)=>{
//       console.log(`The final result is ${results}`)
//   }).catch((err)=>{
//       console.log(err)
//   })

async function doMath() {
  try {
    let doMath = await slowMath.add(6, 2);
    console.log(`the sum is ${doMath}`);
    doMath = await slowMath.multiply(doMath, 2);
    console.log(`the product is ${doMath}`);
    doMath = await slowMath.divide(doMath,4);
    console.log(`the quotient is ${doMath}`);
    doMath = await slowMath.subtract(doMath,3);
    console.log(`the difference is ${doMath}`);
    doMath = await slowMath.add(doMath, 98);
    console.log(`the sum is ${doMath}`);
    doMath = await slowMath.remainder(doMath, 2);
    console.log(`the remainder is ${doMath}`);
    doMath = await slowMath.multiply(doMath, 50);
    console.log(`the product is ${doMath}`);
    doMath = await slowMath.remainder(doMath, 40);
    console.log(`the product is ${doMath}`);
    doMath = await slowMath.add(doMath, 32);
    console.log(`the result is ${doMath}`);

  
    
  
  } catch (error) {
    console.log(error);
  }
}
doMath();
