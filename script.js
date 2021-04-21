"use strict"
{
    let listOfItems = document.querySelectorAll("li");
    let vendingItemsDiv = document.getElementById("vending-items")
    let cartItemsArray = [];
    let cartItemsContainer = document.getElementById("items-in-cart");
    let tax;
    let total;
    let subtotal = 0;
    
    
    vendingItemsDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("item-for-sale")) {
            
            //update cart total
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
            tax = subtotal * .06;
            let displayTax = document.getElementById("tax");
            displayTax.innerText = tax;
            total = subtotal + tax;
            let displayTotal = document.getElementById("total");
            displayTotal.innerText = total;

            }
        

    });

    // CART
    let viewCartButton = document.getElementById("viewCartButton")
        viewCartButton.addEventListener("click", (event) => {
            document.getElementById("cart").scrollIntoView({behavior: 'smooth'});
        });

    let continueShoppingButton = document.getElementById("continueShoppingButton")
    continueShoppingButton.addEventListener("click", (event) => {
            document.getElementById("vending-items").scrollIntoView({behavior: 'smooth'});
        });
        


    // CHECKOUT
    let creditCardRadio = document.getElementById("creditCardButton");
    let cashRadio = document.getElementById("cashButton");

    let checkoutButton = document.getElementById("checkoutButton");
    let checkoutSection = document.getElementById("checkout");
    checkoutButton.addEventListener("click", (event) => {
        let checkoutSection = document.getElementById("checkout");
            document.getElementById("checkout").scrollIntoView({behavior: 'smooth'});
            checkoutSection.removeAttribute("hidden")
        });
    




 


}