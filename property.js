var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyword: 5,
    mouse: 10,
    pen: 25

}

// console.log(shoppingCart);


// When we know the specific property name , we use dot notation to get the property value
var penCount = shoppingCart.pen;

// Alternative System: // When we know the specific property name , we use dot notation to get the property value
var pencount2 =shoppingCart['pen'];

var propertyName = 'keyword';

var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);


var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertiesValues = Object.values(shoppingCart);
// console.log(propertiesValues);

// Set property value:
shoppingCart.mouse = 30;
console.log(shoppingCart);

// Set property value: Alternative way
shoppingCart['mouse'] = 40
console.log(shoppingCart);

// Set property value: Another way
shoppingCart[propertyName] = 50;
console.log(shoppingCart);

