Array.prototype.forEach2 = function(callback){
    let i = 0
    for(;i< this.length;i++){
     result = callback(this[i],i)
    }
    return result
  }
  var a = [1,2,3,4]
  a.forEach2(function(b){
    console.log(b)
  })