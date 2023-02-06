
// Problem-01
/* The work of this function take a positive number. than multiplying by that number by three, than adding 10, than dividing by two, than subtracting five and return the result. */
function mindGame(number){
    if(number<0 || typeof number!="number"){
        return "Please, Enter a valid number";
    }
    const multiplication = number * 3;
    const sum = multiplication+10;
    const division = sum/2;
    // final result
    const subtraction = division-5;
    return subtraction;
}

//  The work of this function is to check whether the length of the string is odd or even
// problem -02
function evenOdd(myString){
    // Check Input Validation
    if( myString=="" || typeof myString !="string"){
        return "Please, Enter a valid data";
    }
    else if (myString.length%2==0) {
        return "even";
    }
     else{
        return "odd";
     }
 }


// problem-03
/* The work of this function to check input number difference from 7. then check the difference is smaller than seven then return the difference. if don't smaller than 7, it will be return double of the input number. */
function isLGSeven(number){
    const difference = number -7;
    // Check Input Validation
    if (typeof number!="number") {
        return "Please, Enter a valid number";
    }
    else if (difference<7) {
        return difference;
    }
    else{
        return number*2;
    }
}

// Problem-04
// The work of this function is to find bad data
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
            else if (number<0) {
                countBadData++;
            }
        }
    }
    return countBadData;
}


// Problem-05
// How many diamond can be found by using gems
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    const firstFriendDiamond = firstFriendGems*21;
    const secondFriendDiamond = secondFriendGems*32;
    const thirdFriendDiamond = thirdFriendGems*43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    // Check Input Validation
    if (typeof firstFriendGems!= "number" || typeof secondFriendGems != "number" || typeof thirdFriendGems != "number") {
        return "All parameter must be a number";
    }
    else if (totalDiamond>1000*2) {
        return totalDiamond-2000;
    }
    else{
        return totalDiamond;
    }
}
