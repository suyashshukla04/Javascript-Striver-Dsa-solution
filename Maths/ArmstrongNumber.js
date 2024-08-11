/**
 * Check if a number is Armstrong Number or not


87

2
Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
 */

const checkArmstrongNumber = (num) => {
    let dummy = Math.abs(num) 
    let countDigits = Math.floor(Math.log10(dummy)+1)
    let revNum = 0
    while(dummy>0){
        let digit = dummy%10;
        revNum+= Math.pow(digit,countDigits);
        dummy = Math.floor(dummy/10)
    }
    console.log(revNum)
    return revNum==num ? true : false
}
const result = checkArmstrongNumber(153);
console.log(result)