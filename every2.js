Array.prototype.every2 = function(callback){
    let i = 0
     let result = true
    for(;i< this.length;i++){
     var test = callback(this[i],i)
      if(!test){
        result = false
      }
    }
    return result
  }

  // eg.
  var a = [1,'n',3,4]
  var x = a.every2(function(b){
    return typeof(b) === 'number'
  })
  console.log(x)