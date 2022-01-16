Array.prototype.forEach2 = function(callback){
  for(var index in this){
    if(this.hasOwnProperty(index)){
      callback(this[index],index,this)
    }
  }
}


// Eg.
var a = [1,2,3,4]
a.forEach2(function(b,c,a){
  console.log(b,c,a)
})