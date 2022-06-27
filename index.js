/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

let state = {
  groceries: [
      { title: "View items", completed: false },
      { title: "Add items to the cart", completed: false },
      { title: "View and adjust the number of items", completed: false },
      { title: "Remove items from the cart", completed: false },
  ],
  showChecked: false
}