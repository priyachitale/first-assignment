//Create a for loop that iterates up 100 while outputing "fizz" at multiple
// of 3."buzz" at multiple of 5 and "fizzbuzz" at multiple of 3 and 5.
let result;
for(let i=1;i<=100;i++)
{
  result="";
    if (i%3==0)
    {
        result=result+"fizz";
    } if (i%5==0)
    {
        result=result+"buzz";
    }  if (i%3!==0 && i%5!==0)
    {
        result=result+i;
    }  
        console.log(result);
    
}
