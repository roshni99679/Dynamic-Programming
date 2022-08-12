const fibonacci=(n)=>{
    const table=Array(n+1).fill(0)
    table[1]=1  //1st fibonacci number is 1
    for (let i=0;i<=n;i++){
        table[i+1]+=table[i]
        table[i+2]+=table[i]
    }
    return table[n]
}
console.log(fibonacci(0))//0
console.log(fibonacci(1))//1
console.log(fibonacci(6))//8
console.log(fibonacci(50))//12586269025

//TC : O(n)..........iterating over table of size n
//SC : O(n)..........table of size n