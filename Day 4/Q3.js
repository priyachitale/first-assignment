/*Q.3 Imagine you are going  out to do some grocery shopping 
            so you have an array called shoppinglist with all the product you
            want buy.Now that you are inside of the shop,you have a basket with
            all the products from youes list,but you want to add a few more.
            Create a new array called shoppingBasket,that will be a copy of the shoppingList array
        and add some new product on it.   */
 let shoppingList=["sweetpotato","potato","onion","tomato"]
 let shoppingBasket=["brinjal","pumpkin"];
 /*for(let i of shoppingList)
 {
     shoppingBasket.push(i);
 }
 console.log(shoppingBasket);*/
 shoppingBasket.push(...shoppingList)
 console.log(shoppingBasket);