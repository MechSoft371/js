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