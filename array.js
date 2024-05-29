// what is array
// collection of elements


var a= ['First', 'second', 3, "this is fourth", 780, 0.56]

console.log(a.length)
console.log(a[0])
console.log(a)
//console.log(a.arguments)

// loop the array

for(let k=0; k<a.length; k++){
    
    console.log(a[k])
}


var i =0

for(;i<a.length;i++){
    console.log("this is for check the for loop")
}

for(var i=0;;i++){
    if(i<a.length){
    console.log("this is for check the for loop wrtting the condition out side the loop")
    }else{
        console.log("loop ended")
        break
    }
}
// how to added a elememnt to existing array
var b = ['one', 'two', 'three']

b.push('four')// push method will at the end of the array
console.log(b)
console.log(b.length)

b.unshift('zero')// unshift method will add a element from the begining of array
console.log(b)
console.log(b.length)


b.push('Five')// push method will at the end of the array
console.log(b)
console.log(b.length)

b.shift()// shift methos is used for removing the element from the begining
console.log(b)
console.log(b.length)

b.pop()
console.log(b)
console.log(b.length)

//unshift and shift will add and remove the element in the begining of the array
//push and pop will add and remove the element at the end of the array

let name=[]

name.push('p')
name.push('r')
name.push('u')
name.push('d')
name.push('h')
name.push('v')
name.push('i')
name.push('r')
name.push('a')
name.push('j')

let position=1
let removeelement=3

name.splice(position, removeelement)
console.log(name)




var ename=['Peddi']
ename.push('p')
ename.push('r')
ename.push('u')
ename.push('d')
ename.push('h')
ename.push('v')
ename.push('i')
ename.push('r')
ename.push('a')
ename.push('j')
ename.push('p')

console.log("Finding the repatative alphabets in  ename : " +ename)
var count=0
for(var t=0;t<ename.length;t++){
    if(ename[t]==ename[t]){
        count++
    }
}
console.log(count)






