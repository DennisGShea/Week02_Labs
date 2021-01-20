var admin = require("firebase-admin");

var serviceAccount = require("../../dgs-secc02-coffee-firebase-adminsdk-eq3k9-24456e3c22.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dgs-secc02-coffee-default-rtdb.firebaseio.com"
});


const db = admin.database();


//  const coffeeList = require('../../Data/coffee.json')




exports.getRecipe = function (coffeeName, callback) {

    db.ref('coffees').once("value")
        .then(snapshot => {
        const coffeeList = snapshot.val()
        //console.log(snapshot.val())
        
        //return coffeeList.find(coffee => coffee.title === coffeeName).ingredients

        const ingredientList =  coffeeList.find(coffee => coffee.title === coffeeName).ingredients
        callback(ingredientList)
    })
    
}

exports.printRecipe = (coffeeName, ingredientList) => {
    console.log(coffeeName + ': ')
    ingredientList.forEach(ingredient => console.log(ingredient))
}
