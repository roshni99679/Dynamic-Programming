/*
Description: Write a function that return a boolean indicating whether it is possible to generate a targetSum value by adding number from a given array. Elements of the array are positive integers and can be used as many time as needed.

Example:

Input: canSum(7,[5, 3, 4, 7])
Output: true
*/


const canSum=(targetSum,numbers)=>{
    if (targetSum==0)return true
    if (targetSum<0)return false

    for (let num of numbers){
        const subtraction =targetSum-num
        if (canSum(subtraction,numbers)==true){
            return true
        }
    }
    return false
}
console.log(canSum(7,[5,3,4,7]))//true
// console.log(canSum(300,[7,14]))//takes a lot of time ............

//m : target sum    n:array.length(no of ele in arr)
//TC : O(n^m)
//SC : O(m)

//Optimized Solution (Memoization)
const optimizedcanSum=(targetSum,numbers,memo={})=>{
    if (targetSum in memo)return memo[targetSum]
    
    if (targetSum==0)return true
    if (targetSum<0)return false
    
    for (let num of numbers){
        const subtraction=targetSum-num
        if (optimizedcanSum(subtraction,numbers,memo)==true){
            memo[targetSum]=true
            return memo[targetSum]
        }
    }
    memo[targetSum]=false
    return memo[targetSum]
}
console.log(optimizedcanSum(7,[5,3,4,7]))//true
console.log(optimizedcanSum(300,[7,14]))//false

//m : target sum    n:array.length(no of ele in arr)
//TC : O(n*m)
//SC : O(m)
