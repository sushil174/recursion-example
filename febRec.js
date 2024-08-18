function feb(num) {
    let ans = []
    function rec(num) {
        if(num <= 1) return num
        else return rec(num-1) + rec(num-2)
    }

    for(let i = 0; i < num; i++) {
        ans.push(rec(i))
    }
    return ans
}

const result = feb(8)
console.log(result)

