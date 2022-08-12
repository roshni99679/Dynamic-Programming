/*
Description: Write a function that return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

Example:

Input: howSum(7, new int[]{5, 3, 4, 7})
Output: [3, 4] // or [7]
*/


const howSum=(targetSum,numbers)=>{
    if (targetSum==0)return []
    if (targetSum<0)return null

    for (let num of numbers){
        const subtraction =targetSum-num
        subtractionResult=howSum(subtraction,numbers)
        if (subtractionResult!=null){
            return [...subtractionResult,num]
        }
    }
    return null
}
console.log(howSum(7,[5,3,4,7]))//[4,3]
// console.log(howSum(300,[7,14]))//takes a lot of time ............

//m : target sum    n:array.length(no of ele in arr)
//TC : O(n^m *m)
//SC : O(m)

//Optimized Solution (Memoization)
const optimizedhowSum=(targetSum,numbers,memo={})=>{
    if (targetSum in memo)return memo[targetSum]
    
    if (targetSum==0)return []
    if (targetSum<0)return null
    
    for (let num of numbers){
        const subtraction=targetSum-num
        const subtractionResult=howSum(subtraction,numbers)
        if (subtractionResult!=null){
            memo[targetSum]=[...subtractionResult,num]
            return memo[targetSum]
        }
    }
    memo[targetSum]=null
    return memo[targetSum]
}
console.log(optimizedhowSum(7,[5,3,4,7]))//[4,3]
console.log(optimizedhowSum(300,[7,14]))//null

//m : target sum    n:array.length(no of ele in arr)
//TC : O(n*m*m)
//SC : O(m*m)
