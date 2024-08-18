function feb(num) {
    let ans = []
    for(let i = 0; i < num; i++) {
        if(ans.length < 2) ans.push(i)
        else {
            ans.push(ans[i-1] + ans[i-2])
        } 
    }
    return ans
}

const result = feb(8)
console.log(result)
