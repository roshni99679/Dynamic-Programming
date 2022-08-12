//return a 2D array containing all ways target can be generated


const allConstruct=(target,wordBank)=>{
    const table=Array(target.length+1).fill().map(()=>[])
    table[0]=[[]]

    for (let i=0;i<=target.length;i++){
        for (let word of wordBank){
            if (target.slice(i,i+word.length)===word){
                const combination=table[i].map((subarr)=>[...subarr,word])
                table[i+word.length].push(...combination)
            }
        }
    }
    return table[target.length]
}
console.log(allConstruct("purple",["purp","p","ur","le","purpl"]))
//[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]


//TC : O(n^m)
//SC : O(n^m)