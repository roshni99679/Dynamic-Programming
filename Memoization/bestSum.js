/*
Description: Write a function that returns an array containing the shortest combination of numbers that add up to exactly the targetSum. If there is a tie fo the shortest combination, you may return any one of the shortest.

Example:

Input: bestSum(7, new int[]{5, 3, 4, 7})
Output: [7]
*/
const bestSum=(targetSum,numbers)=>{
    if (targetSum==0)return []
    if (targetSum<0)return null 

    let shortestCombination=null
    for (let num of numbers){
        const subtraction=targetSum-num
        const subtractionResult=bestSum(subtraction,numbers)
        if (subtractionResult!=null){
            const combination=[...subtractionResult,num]
            if(shortestCombination==null || combination.length<shortestCombination.length){
                shortestCombination=combination
            }
        }
    }
    return shortestCombination
}
console.log(bestSum(7,[5,3,4,7]))//[ 7 ]
// console.log(bestSum(300,[7,14]))//takes a lot of time ............

//TC : O(n^m *m)
//SC : O(m*m)



//Optimized Solution (Memoization)
const optimizedbestSum=(targetSum,numbers,memo={})=>{
    if (targetSum in memo)return memo[targetSum]

    if (targetSum==0)return []
    if (targetSum<0)return null 

    let shortestCombination=null

    for (let num of numbers){
        const subtraction=targetSum-num
        const subtractionResult=optimizedbestSum(subtraction,numbers,memo)

        if (subtractionResult!=null){
            const combination=[...subtractionResult,num]

            if(shortestCombination==null || combination.length<shortestCombination.length){
                shortestCombination=combination
            }
        }
    }
    memo[targetSum]=shortestCombination
    return memo[targetSum]
}
console.log(optimizedbestSum(7,[5,3,4,7]))//[ 7 ]
console.log(optimizedbestSum(8,[2,3,5]))//[ 5, 3 ]
console.log(optimizedbestSum(100,[1,2,25,5]))//[ 25, 25, 25, 25 ]


//TC : O(n*m *m)
//SC : O(m*m)