
const { getRecipe, printRecipe } = require('./src/helpers')
const myCoffee = process.argv[2] ||  'Latte'
getRecipe(myCoffee, myRecipe => {
    printRecipe(myCoffee, myRecipe )
    return printRecipe(myCoffee, myRecipe)
})
return







// 1. Import coffee.json as coffeeList


// 2. Define a myCoffee variable that is equal to
//    your favorite coffee name ("title")
//const myCoffee = 'Cortado'

// 3. Write a getRecipe function that takes a coffee name
//    and returns the recipe (ingredient list) of that coffee


// 4. Define a myRecipe variable that is equal to
//    the recipe (ingredient list) of myCoffee

        // console.log(myRecipe)
        // console.log(myRecipe.ingredients)
        // return coffeeList.find(coffee => coffee.title === coffeeName.ingredients

// 5. Define a printRecipe function that outputs
//     the name of your favorite coffee and ingredient list
        // function printRecipe(coffeeName, ingredientList) {
        //     console.log(coffeeName + ': ')
        //     ingredientList.forEach(ingredient => console.log(ingredient))
        //}

// 6. Now move getRecipe and printRecipe to an external file

  //  printRecipe(myCoffee, myRecipe)






// // Day 5    Jan 15 2021   

// const coffees = require('./Data/coffee.json')

// // // let milkyCoffees = coffees.filter( recipe => recipe.ingredients.includes('Milk') )

// //   coffees.forEach(recipe => {
// //     if(recipe.ingredients.includes('Steamed Milk') 
// //         || recipe.ingredients.includes('Milk')
// //         || recipe.ingredients.includes('Cream')){
// //              console.log(recipe.id, recipe.title)  }   
// //   })


//   exports.doSomethingElse = (a,b) { 
//       console.log({a,b}) 
//   }

//     exports.doSomethingElse = (a,b)
//     console.log('a is: , a')     
//     console.log('b is: , b')   




//     }
//     if(recipe.ingredients.includes('Steamed Milk') 
//         || recipe.ingredients.includes('Milk')
//         || recipe.ingredients.includes('Cream')){
//              console.log(recipe.id, recipe.title)  }   
//   })












// function getName(callback) {
//     var name = prompt('Enter your name')
//         return name
// }
// console.log('Hello ', getName ())



// function getName2(callbackFunction) {
//     let name = prompt( 'Enter your name:')
//     //console.log()
//         callbackFunction(name)
// }
// console.log('Hi Becca')

// getName2(usersName => console.log('Welcome', usersName))
// console.log('Finished')

// function doSomething(res) {
//     console.log('Result: ', res)
// }

// function square (num, cb) {
//       let result = num * num
//       cb(result)
// }
// square(4, doSomething)
// // -----

// function square2(num) {
//     return num * num
// }

// let result = square2(4)
// console.log( )