"use strict"
{
    // let listOfItems = document.querySelectorAll("li");
    let vendingItemsDiv = document.getElementById("vending-items")
    let instructions = document.getElementById("instructions");
    let cartItemsArray = [];
    let cartItemsContainer = document.getElementById("items-in-cart");
    let cartPricesContainer = document.getElementById("prices-in-cart");
    let cartDiv = document.getElementById("cart");
    let receiptDiv = document.getElementById("receipt");
    let tax;
    let total;
    let subtotal = 0;
    let amountTendered;
    let change;
    
    // CART   
    vendingItemsDiv.addEventListener("click", (event) => {
        
        let eventTargetClosest = event.target.closest(".item-for-sale");
        if (event.target.closest(".item-for-sale")) {
            
            //update cart total
            subtotal += Number(eventTargetClosest.getAttribute("data-price"));
            
            // remove cart empty message
            let cartEmptyMessage = document.getElementById("cartEmpty");
            if (cartItemsArray !== null) {
               cartEmptyMessage.innerText = ("Click item to remove from cart."); 
            }

            // add items to list
            cartItemsArray.push(eventTargetClosest)
            const product = document.createElement("li");
            product.classList.add("product")
            product.innerText = `${eventTargetClosest.getAttribute("data-description")}`;
            cartItemsContainer.append(product);
            const productPrice = document.createElement("li");
            productPrice.classList.add("product-price")
            //let purchasedItemPrice = purchasedItem.getAttribute("data-price");
            productPrice.innerText = `$${eventTargetClosest.getAttribute("data-price")}.00`;
            cartPricesContainer.append(productPrice);

            //remove item from cart
            product.addEventListener("click", (event) => {
                product.remove();
                productPrice.remove();
                let index = cartItemsArray.indexOf(eventTargetClosest);
                cartItemsArray.splice(index, 1);
                subtotal -= Number(eventTargetClosest.getAttribute("data-price"));
                let displaySubtotal = document.getElementById("subtotal");
                displaySubtotal.innerText = subtotal.toFixed(2);
                tax = Number((subtotal * .06).toFixed(2));
                let displayTax = document.getElementById("tax");
                displayTax.innerText = tax.toFixed(2);
                total = Number(subtotal + tax);
                let displayTotal = document.getElementById("total");
                displayTotal.innerText = total.toFixed(2);
                console.log(cartItemsArray);
            });
            
            //update subtotal, tax and total 
            let displaySubtotal = document.getElementById("subtotal");
            displaySubtotal.innerText = subtotal.toFixed(2);
            tax = Number((subtotal * .06).toFixed(2));
            let displayTax = document.getElementById("tax");
            displayTax.innerText = tax.toFixed(2);
            total = Number(subtotal + tax);
            let displayTotal = document.getElementById("total");
            displayTotal.innerText = total.toFixed(2);

            }
        
        eventTargetClosest.classList.add("clicked");
        setTimeout(() => {
            eventTargetClosest.classList.remove("clicked");
        }, 200);
        

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
            // cartDiv.setAttribute("hidden", true);
            continueShoppingButton.setAttribute("hidden", true);
            checkoutButton.setAttribute("hidden", true);
            instructions.setAttribute("hidden", true);
            viewCartButton.setAttribute("hidden", true);
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
        continueShoppingButton.removeAttribute("hidden");
        checkoutButton.removeAttribute("hidden");
        instructions.removeAttribute("hidden");
        viewCartButton.removeAttribute("hidden");
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

        for (let purchasedItem of cartItemsArray){
            let receiptItem = document.createElement("li");
            let purchasedItemPrice = purchasedItem.getAttribute("data-price");
            let purchaseItemDescription = purchasedItem.getAttribute("data-description");
            receiptItem.innerText = purchaseItemDescription + `. . .  $` + Number(purchasedItemPrice).toFixed(2);
            receiptItemsContainer.append(receiptItem);
          }
        let displayTotalReceipt = document.getElementById("display-total-receipt");
        displayTotalReceipt.innerText = total.toFixed(2);
        let displayChangeReceipt = document.getElementById("display-change-receipt");
        displayChangeReceipt.innerText = `Your change: $` + Number(change).toFixed(2);
        document.getElementById("cashPurchaseSubmit").disabled = true;        
    })

    let creditCardSubmit = document.getElementById("creditPurchaseSubmit");
    creditCardSubmit.addEventListener("click", (event) => {
        event.preventDefault();

        function receipt () {
            receiptDiv.removeAttribute("hidden");

            for (let purchasedItem of cartItemsArray){
            let receiptItem = document.createElement("li");
            let purchasedItemPrice = purchasedItem.getAttribute("data-price");
            let purchaseItemDescription = purchasedItem.getAttribute("data-description");
            receiptItem.innerText = purchaseItemDescription + `. . .  $` + Number(purchasedItemPrice).toFixed(2);
            receiptItemsContainer.append(receiptItem); 
            }
            let displayTotalReceipt = document.getElementById("display-total-receipt");
            displayTotalReceipt.innerText = total.toFixed(2);
            document.getElementById("creditPurchaseSubmit").disabled = true;
        }


        // CC Validation
        let ccInputValue = document.getElementById("ccNumber");
    
        cardnumber(ccInputValue);
        function cardnumber(ccInputValue) {
        
            let cardVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            let cardAmex = /^(?:3[47][0-9]{13})$/;
            let cardMC = /^(?:5[1-5][0-9]{14})$/;
            if(ccInputValue.value.match(cardVisa)) {
                receipt();
            } else if (ccInputValue.value.match(cardAmex)) {
                receipt();
            } else if (ccInputValue.value.match(cardMC)) {
                receipt();
            } else {
                alert("Not a valid credit card number!");
                return false;
                    }
                }


                
    })

    let receiptButton = document.getElementById("closeReceipt");
    receiptButton.addEventListener("click", (event) => {
        location.reload();
        alert("Thank you for your purchase!");
    })

    


}