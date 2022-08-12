//Fibonacci series:
//1,1,2,3,5,8,13......


//Write a function that returns nth fibonacci number
//Brute Force Method :
const fibo=(n)=>{
    if (n<=2)return 1
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(1))//1
console.log(fibo(2))//1
console.log(fibo(5))//5
console.log(fibo(7))//13
// console.log(fibo(50))    //takes a lot of time 

//TC : O(2^n)
//SC : O(n)





//Fibonacci of large numbers : Optimized Solution (Memoization)
const Optimizedfibo=(n,memo={})=>{
    if (n in memo)return memo[n]
    if (n<=2) return 1
    memo[n]=Optimizedfibo(n-1,memo)+Optimizedfibo(n-2,memo)
    return memo[n]
}
console.log(Optimizedfibo(1))//1
console.log(Optimizedfibo(2))//1
console.log(Optimizedfibo(5))//5
console.log(Optimizedfibo(7))//13
console.log(Optimizedfibo(50))//12586269025

//TC : O(n)
//SC : O(n)

