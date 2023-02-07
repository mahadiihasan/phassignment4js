// problem 1...........

// this mindGame() function is for task 1

function mindGame(x){

    if(Number.isInteger(x)){    //valid input check

        let multiply = x * 3;
        let add = multiply + 10 ;
        let div = add / 2;
        let subtract = div - 5;
        
        return subtract; 
    }
    else{

        return "please enter an integer";

    }

    
}

let result1 = mindGame(33); //calling function from here
//console.log(result1);



// problem 2...........


function evenOdd(str){


    if(typeof str === 'string'){  // valid input check here

        if(str.length % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }

    }
    else{
        
        return 'please enter a string';
    }
    
}

let result2 = evenOdd('phero');
//console.log(result2);



// problem 3...........



function isLGSeven(x){

    if(Number.isInteger(x)){  //valid input check

        let sub = x - 7;

    if(sub >=7){

        return x*2;
    }
    else{

        return sub;

    }
    }
    else{

        return 'please enter an integer';
    }
    
}

let result3 = isLGSeven(-15);
//console.log(result3);


// problem 4...........



function findingBadData(arr){

    if(Array.isArray(arr)){  //checking valid input

    let badData = 0;

    for(let i=0; i<=arr.length; i++){

        if(arr[i] < 0){

            badData++;

        }
        else{

            continue;

        }
        
    }

    return badData;

    }
    else{

        return 'please enter an array';
    }    

}

let result4 = findingBadData([-4, -9, -5, -33, -55]);
//console.log(result4);



// problem 5.............



function gemsToDiamond(x, y, z){

    if(Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)){ //check valid input

        let friend1 = x * 21;
        let friend2 = y * 32;
        let friend3 = z * 43;

        let totalDiamond = friend1 + friend2 + friend3;
    
    if(totalDiamond > (1000*2)){

        let remainigDiamond = totalDiamond - 2000;
        return remainigDiamond;
    }
    else{

        return totalDiamond;
    }

    }
    else{

        return 'please enter 3 integer';
    }

    

}

let result5 = gemsToDiamond(100, 5, 1);
//let result5 = gemsToDiamond(100, 5, 'heelo');
//console.log(result5);



