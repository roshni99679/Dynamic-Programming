const canSum=(targetSum,numbers)=>{
    
    const table=Array(targetSum+1).fill(false)
    table[0]=true   //0 target sum can be achieved using no elements of numbers array

    for (let i=0;i<=targetSum+1;i++){

        if (table[i]==true){

            for (let num of numbers){
                table[i+num]=table[i]//table[i+num]=true
            }
        }  
    }
    return table[targetSum]

}
console.log(canSum(8,[2,3,5]))//true
console.log(canSum(0,[2,3,5]))//true
console.log(canSum(1,[2,3,5]))//false
console.log(canSum(100,[25,3,5]))//true