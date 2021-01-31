for(let i = 1 ; i < 101; i++){


    let ans = ''

    if(i%3 == 0){
        ans+='CLX'
    }
    if(i%5 == 0){
        ans+='DTC'
    }

    console.log(ans || i)
}