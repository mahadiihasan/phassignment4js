// problem 1...........


function mindGame(x){

    let multiply = x * 3;
    let add = multiply + 10 ;
    let div = add / 2;
    let subtract = div - 5;
    
    return subtract;

}

console.log(mindGame(33));



// problem 2...........


function evenOdd(str){

    if(str.length % 2 == 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}

evenOdd('Phero');



// problem 3...........



function isLGSeven(x){

    let sub = x - 7;

    if(sub >=7){

        return x*2;
    }
    else{

        return sub;

    }
}

console.log(isLGSeven(-15));


// problem 4...........



function findingBadData(arr){

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

console.log(findingBadData([-4, -9, -5, -33, -55]));



// problem 5.............



function gemsToDiamond(x, y, z){

    let friend1 = x * 21;
    let friend2 = y * 32;
    let friend3 = z * 43;

    let totalDiamond = friend1 + friend2 + friend3;
    
    if(totalDiamond > (1000*2)){

        let remainigDiamond = totalDiamond - 2000;
        console.log(remainigDiamond);
    }
    else{

        console.log(totalDiamond);
    }

}

gemsToDiamond(100, 5, 1);



