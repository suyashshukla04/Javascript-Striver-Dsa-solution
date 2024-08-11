/**
 * Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.
   Note :- Evenly divides means whether n is divisible by a digit i.e. leaves a remainder 0 when divided.
 */

   class Solution {
    //Function to check whether the number evenly divides N.
    evenlyDivides(N)
    {
        //your code here
        let dummy = N;
        let result = 0;
        while(dummy>0)
        {
            let digit = dummy%10
            if(N%digit == 0){
                result++
            }
            dummy = Math.floor(dummy/10)
        }
        return result
    }
}