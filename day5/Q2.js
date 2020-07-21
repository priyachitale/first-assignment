/*Create class User with properties as name,age & email
               he can login and logout
               Create anoter class Moderator which has all the features of user,
               plus additional functionality to add coins and remove coins
               Create one more class Admin which has all the feature of Moderator plus
               additional feature like add a course and delete a particular course for a user.*/

class User
{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
    }
        login()
        {
            console.log(`${this.name}has logged in`);
        }
        logout()
            {
                console.log(`${this.name}has logged out`);
            }
        

    }


class Moderator extends User
{
    constructor(name,age,email,role,coins)
    {
        super(name,age,email);
        this.role=role;
        this.coins=coins;
    }
addcoins()
{
this.coins++;
console.log(`${this.name}has ${this.coins}`);
}

removecoins()
{
this.coins--;
console.log(`${this.name}has ${this.coins}`);
}
}
class Admin extends Moderator 
{
    addcourse(user,course)
    {
        user.course.push(course);
        console.log(user);
    }
    deletecourse(user)
    {
        users=users.filter(u=>{return u.email != user.email});
    }

}
let user1=new User("Priya",21,"priya@gmail.com")
let user2=new User("Yash",18,"yash@gmail.com")
let mod=new Moderator("divya",21,"divya@gamil.com")
let admin=new Admin("vrudhali",20,"vrushali@gmail.com")
let users=[user1,user2,mod,admin];

users.forEach(element=>{console.log(element);});