//returns an arr containing  any combination by which targetSum can be constructed

const howSum=(targetSum,numbers)=>{

    const table=Array(targetSum+1).fill(null)
    table[0]=[] //0 can be constructed in 1 way (using NO ele of numbers array)

    for (let i=0;i<=targetSum+1;i++){

        if (table[i] !=null){
            for (let num of numbers){
                table[i+num]=[...table[i],num]
            }
        }
    }
    return table[targetSum]
}
console.log(howSum(8,[2,3,5]))//[ 2, 2, 2, 2 ]
console.log(howSum(0,[2,3,5]))//[]
console.log(howSum(1,[2,3,5]))//null
console.log(howSum(100,[25,3,5]))
// [
//     5, 5, 3, 3, 3, 3, 3, 3, 3,
//     3, 3, 3, 3, 3, 3, 3, 3, 3,
//     3, 3, 3, 3, 3, 3, 3, 3, 3,
//     3, 3, 3, 3, 3
// ]

//TC : O(m*n*m)
//SC : O(m*m)