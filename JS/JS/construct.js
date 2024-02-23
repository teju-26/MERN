/*class person {
    constructor(myslef,age){
    this.myslef=myslef;
    this.age=age
 }
 
}
var mytext = new person('teju',21)
console.log(mytext.myslef)
console.log(mytext.age)
*/

//using function constructor as we can define the obj name in captial and also without using keyword as "constructor"

function Fruit(colour,name,price) {
 this.colour=colour;
 this.name=name;
 this.price=price;
}
const obj = new Fruit('red','apple',80)
console.log(obj.name)
console.log(obj.price)