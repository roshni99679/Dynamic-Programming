const gridTraveler=(m,n)=>{

    const table=Array(m+1).fill().map(()=>Array(n+1).fill(0))
    table [1][1]=1 // 1*1 grid : 1way

    for (let i=0;i<=m;i++){
        for (let j=0;j<=n;j++){
            //m rows : moving right(i)
            //n colums : moving down(j)

            const curr=table[i][j]

            if (i+1<=m){table[i+1][j]+=curr}//move right and increment value at that position by current element
            if (j+1<=n){table[i][j+1]+=curr}//move down and increment value at that postion by current element

        }
    }
    return table[m][n]
}
console.log(gridTraveler(18,18))//2333606220

// TC : O(m*n)
// SC : O(m*n)

