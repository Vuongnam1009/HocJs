Array.prototype.some2 = function(callback){
  let result = false
 for(var index in this){
   if (this.hasOwnProperty(index)) {
     var test = callback(this[index],index)
      if(!!test){
        result = true
   }
   }
 }
 return result
}

// eg.
var a = ['b','n','b',1]
var x = a.some2(function(b){
 return typeof(b) === 'number'
})
console.log(x)