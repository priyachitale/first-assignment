/*Q.5 You are managing a scale separtment for your company ,
            you want to reward employee based on the sales made by them 
            during the year.
            The criteria is as follows;<br>
            1.sales from 0-5000:2%<br>
            2.sales from 5001-10000:5%<br>
            3.sales from 10001-20000:7%<br>
            4.Above 20000:10%<br>
            Then log the total commision earned bty him.*/
let n=prompt("Enter the value of n");
if(n>0 && n<=5000)
{
    console.log("Company want to reward you by 2%");
}
if(n>=5001 && n<=10000)
{
    console.log("Company want to reward you by 5%");
}
if(n>=10001 && n<=20000)
{
    console.log("Company want to reward you by 7%");
}
if( n>=20001 && n<=100000)
{
    console.log("Company want to reward you by 10%");
}