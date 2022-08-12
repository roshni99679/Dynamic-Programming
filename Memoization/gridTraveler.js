/*
Description: You are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right. In how many ways can you travel to the goal on a grid with dimensions m*n.

Example:

Input: gridTraveler(2, 3)
Output: 3
*/

//bruteforce method :
const gridTraveler=(m,n)=>{
    if (m==1 && n==1)return 1
    if (m==0 || n==0)return 0
    return gridTraveler(m-1,n)+gridTraveler(m,n-1)
}
//m-1 , n : move down (when we move down on grid , no of rows decreses by 1)
//m , n-1 : move right(when we move right on grid , no of columns decreses by 1)
console.log(gridTraveler(3,2))//3
console.log(gridTraveler(1,1))//1
console.log(gridTraveler(0,2))//0
console.log(gridTraveler(3,0))//0
console.log(gridTraveler(3,3))//6
// console.log(gridTraveler(18,18))//takes lot of time ...........

//TC : O(2^(m+n))
//SC : O(m+n)





//Optimized Solution (Memoization)
const optimizedgridTraveler=(m,n,memo={})=>{
    const key=m+','+n
    if (key in memo)return memo[key]

    if (m==1 && n==1)return 1
    if (m==0 || n==0)return 0

    memo[key]=optimizedgridTraveler(m-1,n,memo)+optimizedgridTraveler(m,n-1,memo)
    return memo[key]
}
console.log(optimizedgridTraveler(3,2))//3
console.log(optimizedgridTraveler(1,1))//1
console.log(optimizedgridTraveler(0,2))//0
console.log(optimizedgridTraveler(3,0))//0
console.log(optimizedgridTraveler(3,3))//6
console.log(optimizedgridTraveler(18,18))//2333606220

//TC : O(m*n)
//SC : O(m+n)
