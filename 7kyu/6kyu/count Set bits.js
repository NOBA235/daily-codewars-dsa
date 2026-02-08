/*
write a function that takes an integer as inputs, and returns the number of bits that are equal to one in the binary representataion of that number. You can quarantee that input is non-negative

Example :the Binary representataion 0f 1234 is 10011010010, so tht function return 5 in this case 
 */

function countBits(n){
    let count=0;
    while(n){
        count +=n & 1;
        n>>>=1;

    }
    return count;
}