Array.prototype.every2 = function(callback){
  let result = true
 for(var index in this){
   if(this.hasOwnProperty(index)){
  var test = callback(this[index],index)}
   if(!test){
     result = false
   }
 }
 return result
}

// eg.
var a = [1,2,3,4]
var x = a.every2(function(b){
 return typeof(b) === 'number'
})
console.log(x)