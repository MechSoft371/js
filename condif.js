var marks =61

if(marks>50 && marks <60){
    console.log("pass and More than 50")
}else if(marks >60 && marks < 70){
    console.log("more than 60 marks")
}else if(marks >70){
    console.log("first class")
}else if(marks <50){
    console.log("fail")
}


//+++=========================================================


switch("qA")
{
    case "DEV":
        console.log("DEV team")
        //break;
    
    case "QA":
        console.log("QA team")
        //break;
    
    case "IT":
        console.log("IT team")
        //break;

    default:
        console.log("no match is found")
}

//==========================================================================


d = new Date().getDay()

console.log(d)

switch(d)
{

    case 0:
        day ="Sunday";
        break;

    case 1:
        day ="Monday";
        break;
    case 2:
        day ="Tuesday";
        break;
    case 3:
        day ="wednesday";
        break;
    case 4:
        day ="thursday";
        break;
    case 5:
        day ="Friday";
        break;
    case 6:
        day ="Saturday";
        break;
}

console.log(day)