Array.prototype.some2 = function(callback){
    let i = 0
     let result = false
    for(;i< this.length;i++){
     var test = callback(this[i],i)
      if(!!test){
        result = true
      }
    }
    return result
  }

  // eg.
  var a = ['b','n','b','1']
  var x = a.some2(function(b){
    return typeof(b) === 'number'
  })
  console.log(x)