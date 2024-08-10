/**
 * Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
 */

const printDivisor = (num) => {
    let result = []
    let sqrtNum = Math.sqrt(num)
    for(let i = 1;i<=sqrtNum;i++){
        if(num%i == 0)
        {
           result.push(i)
           if(i!= Math.floor(num/i)){
            result.push(Math.floor(num/i))
        }
        }
        
    }
    return result
}

let result = printDivisor(36)
console.log(result)