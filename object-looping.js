// array vs object
var friendName = ['rahim','karim','selim','abul', 'kabul', 'Babul'];
var friendAge = [12, 13 , 14, 15, 16, 17];

var friendsInfo = {
    rahim: 12,
    karim: 13,
    selim: 14,
    abul: 15,
    kabul:16,
    babul: 17
}

var shoppingCart = {
    books: 8,
    sunglass: 1,
    keyword: 5,
    mouse: 10,
    pen: 25,
    shoes: 3

}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
// for (var i = 0; i < keys.length; i++);{
//    var propertyName = keys[i];
//    console.log(propertyName);
// }

// For in loop
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName);
}