//returns shortest combination by which target sum can be constructed

const bestSum=(targetSum,numbers)=>{
    const table=Array(targetSum+1).fill(null)
    table[0]=[]

    for (let i=0;i<=targetSum+1;i++){
        if(table[i] !=null) {
            for (let num of numbers){
                const combination=[...table[i],num]
                if (table[i+num]==null || table[i+num].length>combination.length){
                    table[i+num]=combination
                }

            }
        }
    }
    return table[targetSum]
}
console.log(bestSum(8,[2,3,5]))//[ 3, 5 ]]
console.log(bestSum(0,[2,3,5]))//[]
console.log(bestSum(1,[2,3,5]))//null
console.log(bestSum(100,[25,3,5]))//[ 25, 25, 25, 25 ]

//TC : O(m*n*m)
//SC : O(m*m)
