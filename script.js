"use strict"
{
    let listOfItems = document.querySelectorAll("li");
    let vendingItemsDiv = document.getElementById("vending-items")
    let cartItemsArray = [];
    let cartItemsContainer = document.getElementById("items-in-cart");
    
    
        
    vendingItemsDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("item-for-sale")) {
            
            //update cart total
            let subtotal = 0;
            subtotal += Number(event.target.getAttribute("data-price"));
            console.log(subtotal);

            // add items to list
            cartItemsArray.push(event.target)
            const product = document.createElement("li");
            product.innerText = `Price: $${event.target.getAttribute("data-price")}`;
            cartItemsContainer.append(product);

            //update subtotal, tax and total 
            let displaySubtotal = document.getElementById("subtotal");
            displaySubtotal.innerText = subtotal;
            let tax = subtotal * .06;
            let displayTax = document.getElementById("tax");
            displayTax.innerText = tax;
            let total = subtotal + tax;
            let displayTotal = document.getElementById("total");
            displayTotal.innerText = total;

            }
        

    });


    



 


}