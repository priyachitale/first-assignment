//Q.4 Make a Calculator in js which can do operation as addition,Subtraction,
//Multiplication,Division,Suareroot,Percentage
 let a =prompt("Enter the value a",5);
 a=Number(a);
let b=prompt("Enter the Value b",4);
b=Number(b);
let ch=prompt("Enter your choice",1);
ch=Number(ch);
let c;
//let a=3,b=5;
switch(ch)
{
    case 1:
         c=a+b;
        console.log("Addition is"+c);
        break;
    case 2:
             c=a-b;
            console.log("Subtraction is"+c);
            break;
    case 3:
         c=a*b;
            console.log("Multiplication is"+c);
            break;
    case 4:
             c=a/b;
            console.log("Division is"+c);
            break;
    case 5:
          
            
            console.log(Math.sqrt(36));
            break;
    case 6:
       
        c=20;
        c=c/100;
        console.log("percentage of c is"+c);
        break;
}
