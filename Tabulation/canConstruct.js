//returns boolean value

const canConstruct=(target,wordBank)=>{
    const table=Array(target.length+1).fill(false)
    table[0]=true //table[0] represents empty string , table[1] represents target[0],table[2] represents target[1] and so on

    for(let i=0;i<=target.length;i++){
        if (table[i]===true){
            for (let word of wordBank){
                if (target.slice(i,i+word.length)===word){
                    table[i+word.length]=true
                }
            }
        }
    }
    return table[target.length]
}
console.log(canConstruct("abcdef",["abc","ab","def","abcd","ef"]))//true


//TC : O(m*n*m)
//SC : O(m)