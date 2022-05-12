console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


Array.prototype.first = function(){
    return this[0]
}

console.log([1,23,4,57,5,0].first())