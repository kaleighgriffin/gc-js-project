"use strict"
{
    // let listOfItems = document.querySelectorAll("li");
    let vendingItemsDiv = document.getElementById("vending-items")
    let cartItemsArray = [];
    let cartItemsContainer = document.getElementById("items-in-cart");
    let cartDiv = document.getElementById("cart");
    let receiptDiv = document.getElementById("receipt");
    let tax;
    let total;
    let subtotal = 0;
    let amountTendered;
    let change;
    
    // CART
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
            tax = Number((subtotal * .06).toFixed(2));
            let displayTax = document.getElementById("tax");
            displayTax.innerText = tax;
            total = Number(subtotal + tax);
            let displayTotal = document.getElementById("total");
            displayTotal.innerText = total;

            }
        

    });

    
    let viewCartButton = document.getElementById("viewCartButton")
        viewCartButton.addEventListener("click", (event) => {
            document.getElementById("cart").scrollIntoView({behavior: 'smooth'});
        });

    let continueShoppingButton = document.getElementById("continueShoppingButton")
    continueShoppingButton.addEventListener("click", (event) => {
            document.getElementById("vending-items").scrollIntoView({behavior: 'smooth'});
        });
        


    // CHECKOUT
    let creditCardButton = document.getElementById("creditCardButton");
    let cashButton = document.getElementById("cashButton");

    let checkoutButton = document.getElementById("checkoutButton");
    let checkoutSection = document.getElementById("checkout");
    checkoutButton.addEventListener("click", (event) => {
        let checkoutSection = document.getElementById("checkout");
            document.getElementById("checkout").scrollIntoView({behavior: 'smooth'});
            checkoutSection.removeAttribute("hidden");
            vendingItemsDiv.setAttribute("hidden", true);
            cartDiv.setAttribute("hidden", true);
        });
    
    let cashForm = document.getElementById("cashForm");
    let creditCardForm = document.getElementById("creditCardForm");

    creditCardButton.addEventListener("click", (event) => {
            // document.getElementById("creditPurchaseSubmit").scrollIntoView({behavior: 'smooth'});
            creditCardForm.removeAttribute("hidden");
            cashForm.setAttribute("hidden", true);
        });
    
    cashButton.addEventListener("click", (event) => {
            // document.getElementById("cashPurchaseSubmit").scrollIntoView({behavior: 'smooth'});
            cashForm.removeAttribute("hidden");
            creditCardForm.setAttribute("hidden", true);
            
        });

    let continueShopping2 = document.getElementById("continueShopping2");

    continueShopping2.addEventListener("click", (event) => {
        vendingItemsDiv.removeAttribute("hidden");
        cartDiv.removeAttribute("hidden");
        checkoutSection.setAttribute("hidden", true);
              
       
    });

    

    
    //RECEIPT
    let receiptItemsContainer = document.getElementById("receiptItemsContainer");
    let cashSubmit = document.getElementById("cashPurchaseSubmit");
    cashSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        let cashInput = document.getElementById("amountTendered");
        amountTendered = cashInput.value;
        change = amountTendered - total;
        receiptDiv.removeAttribute("hidden");
        let displayTotalReceipt = document.getElementById("display-total-receipt");
        displayTotalReceipt.innerText = total;
        let displayChangeReceipt = document.getElementById("display-change-receipt");
        displayChangeReceipt.innerText = `Your change: $${change}`;
                
    })

    let creditCardSubmit = document.getElementById("creditPurchaseSubmit");
    creditCardSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        receiptDiv.removeAttribute("hidden");

        for (let purchasedItem of cartItemsArray){
        let receiptItem = document.createElement("li");
        let purchasedItemPrice = purchasedItem.getAttribute("data-price")
        receiptItem.innerText = `Item name . . . ${purchasedItemPrice}`;
        receiptItemsContainer.append(receiptItem);
        
        }
        let displayTotalReceipt = document.getElementById("display-total-receipt");
        displayTotalReceipt.innerText = total;
        
                
    })



    


}