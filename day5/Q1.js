/*Write a program which does the folowing things.
1.Take a positive number from the user.
2.Makes an array of numbers till the nymber given by user.
3.Use higher order function to the filter the odd numbers.
4.Generate and array of the cubes of the filtered numbers.*/
let n=prompt("How many numbers you want to enter");
n=Number(n);
let arr=[];

//arr=Number(arr);
for(let i=0;i<n;i++)
{
     arr.push(Number(prompt("Enter your number:" )));
    
//console.log("Your number is: " + arr);
}
console.log(arr);
let arr2=arr.filter(function(item)
{
     if(item%2!==0)
     {
         return item;
     }
});
console.log(arr2);

let arr3=arr2.map(function(item)
{
    return item*item*item;
});
console.log(arr3);