function test(n){
    res = []
    for (let i=1; i<=n; i++){
      if(i % 2 === 0){
        res.push(i)
      }
    }
    return res
}

console.log(test(50))