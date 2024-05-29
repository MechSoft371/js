// var n1 = 12
// let n2 = 10
// n2 = "Strings s"
// n1 = 13
// console.log(n2)
// //console.log(n1)


// class newclass{
//     new=50
//     static new2=70

//     constructor(){
//         console.log("this constructo")
//     }

//     method1(){
//         console.log("this sample method")
//     }

//     static method2(String ){
//         console.log("this is method2")
//     }

//     static method3(String ){
//         console.log("this is method3")
//     }



// }

// let neww = new newclass()

// // neww.method1()

// // newclass.method3(3, 4)
// // console.log(newclass.new2)



class a{

    m1(){
        console.log("This is m1 block from classa")
    }

    m2(Stuname, sturllno, surname){
        console.log("Stuname :"+Stuname)
        console.log("sturllno :"+sturllno)
        console.log("stusurname :"+ surname)
        console.log("this is from class a")
    }


}

class b extends a{
    m2(Stuname, sturllno, surname){

        console.log("this is from class b")

    }
}

var stuobj = new a()
stuobj.m2('prudhvi', 45, 'peddi' )

var stuobj = new b()
stuobj.m2('prudhvi', 45, 'peddi' )


