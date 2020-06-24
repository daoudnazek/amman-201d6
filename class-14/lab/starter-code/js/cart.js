/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var table = document.getElementsByTagName('tbody')[0];
  while (table.hasChildNodes() === true) {
    var tableRow = table.firstChild;
    table.removeChild(tableRow);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var table = document.getElementsByTagName('tbody')[0];
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  for (let i = 0; i < cart.items.length; i++) {
    var row =document.createElement('tr');
    var deleteLink = document.createElement('td');
    var quantity = document.createElement('td');
    var item = document.createElement('td');
    deleteLink.textContent = 'X';
    quantity.textContent = cart.items[i].quantity;
    item.textContent = cart.items[i].product;
    row.appendChild(deleteLink);
    row.appendChild(quantity);
    row.appendChild(item);
    table.appendChild(row);
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

console.log(document.getElementsByTagName('td'));

function removeItemFromCart(event) {
  var toDelete = event.target.nextSibling.nextSibling.textContent;;

  for (var i = 0; i < cart.items.length; i++){
    if (cart.items[i].product === toDelete){
      var clickedItem = cart.items[i];
      console.log(clickedItem);
      cart.removeItem(i);
    }
  }
  cart.saveToLocalStorage();
  
  renderCart();
  // if(event.target.textContent === 'X'){
  //   cart.removeItem(cart.items[0]);
  // }
  // localStorage.setItem('cart',JSON.stringify(cart.items));
  // renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
