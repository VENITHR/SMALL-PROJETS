let outputscreen = document.getElementById("output");


function display(num){
    outputscreen.value +=num;
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
        }
    catch(err){
            alert("Invalid calculation")
    }
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}

function cl(){
    outputscreen.value = "" ;
}