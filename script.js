"use strict"
{
    let listOfItems = document.querySelectorAll("li");
    let vendingItemsDiv = document.getElementById("vending-items")
    let cartItemsArray = [];
    
    vendingItemsDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("item-for-sale")) {
            cartItemsArray.push(event.target)
        }
        console.log(cartItemsArray);
    });
    



 


}