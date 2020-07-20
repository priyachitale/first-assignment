/*Q.6 Rewrite the function using '?'or '||'
            Write a loop which prompts for a number greater than 100.If the visitor 
            enters anothre number-ask them to input again.
            The loop must ask for a number until enter the visitor enters a number
            greater than 100 or cancels the input/enters an empty line.
            Here we can assume that the visitor only inputs numbers.There's
            no need to implement a special handling for a non-numeric
            input in this task*/

 let n;

do 
{
  n = prompt("Enter a number greater than 100?", 0);
  if(n<=100)
  {
    n=  prompt("Enter the input again which is greater than 100");
  }
} while (n <= 100 && n);