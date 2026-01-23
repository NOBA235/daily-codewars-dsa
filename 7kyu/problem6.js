function findLargestSum(numbers){
    let max1=Infinity
    let max2=Infinity;
    for(let num of number){
        if(num > max1){
            num=max1;
        }else if(num >max2){
            num=max2
        }
    }
    return max1 + max2
}