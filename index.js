
// Problem-01
function mindGame(number){
    // Check Input Validation
    if(number<0 || typeof number!="number"){
        return "Please, Enter a valid number";
    }
    // number multiplied  by 3
    const multiplication = number * 3;
    const sum = multiplication+10;
    const division = sum/2;
    // final result
    const subtraction = division-5;
    return subtraction;
}


// problem -02
function evenOdd(myString){
    // Check Input Validation
    if( myString=="" || typeof myString !="string"){
        return "Please, Enter a valid data";
    }
    // Is Even
    else if (myString.length%2==0) {
        return "even";
    }
     else{
        return "odd";
     }
 }


// problem-03

function isLGSeven(number){
    const difference = number -7;
    // Check Input Validation
    if (typeof number!="number") {
        return "Please, Enter a valid number";
    }
    //is difference smaller than 7
    else if (difference<7) {
        return difference;
    }
    // difference multiplied  by 2
    else{
        return difference*2;
    }
}

// Problem-04
function findingBadData(numbers){
    let countBadData = 0;
    const isArray = Array.isArray(numbers);
    // Check Input Validation(array)
    if (isArray==false) {
       return "Enter a valid Array";
    }
    else{
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
             // Check Input Validation(array element)
            if (typeof number != "number") {
                return "Array element must be a number";
            }
            // number is smaller than 0
            else if (number<0) {
                countBadData++;
            }
        }
    }
    return countBadData;
}


// Problem-05
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    const firstFriendDiamond = firstFriendGems*21;
    const secondFriendDiamond = secondFriendGems*32;
    const thirdFriendDiamond = thirdFriendGems*43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    // Check Input Validation
    if (typeof firstFriendGems!= "number" || typeof secondFriendGems != "number" || typeof thirdFriendGems != "number") {
        return "All parameter must be a number";
    }
    // totalDiamond is bigger than 1000*2
    else if (totalDiamond>1000*2) {
        return totalDiamond-2000;
    }
    else{
        return totalDiamond;
    }
}
