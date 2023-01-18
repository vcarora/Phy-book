let n = 31052022;
// Write solution code here to find the lucky number
let sum =0;
let len = n.toString().length;
for(i = len;i>0;i--){
    sum +=n%10;
    n = Math.floor(n/10);
}
let temp =sum;
  sum=0;
do{ 
    sum += temp%10;
    temp = Math.floor(temp/10);  

}while(temp>0);
console.log(`Your Lucky Number is ${sum}`);
