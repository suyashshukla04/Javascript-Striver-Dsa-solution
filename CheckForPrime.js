/**
 * Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
 */

const checkPrime = (num) => {
    let sqrtNum = Math.sqrt(num);
    let count = 0;
    for (let i=1 ; i<=sqrtNum;i++)
    {
        if(num%i == 0)
        {
           count++
           if(i!=Math.floor(num/i))
           {
            count++
           }
        }
    }
    return count == 2 ? true : false
}

const result = checkPrime(7) //Thala for a reason
console.log(result)