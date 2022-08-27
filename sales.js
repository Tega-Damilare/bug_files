// create a variable (sale) to store the option tag sale
// get the select element from enter_sales.html by Id
// And Store it as allSales
// Get the updated services from the local storage
// store them as the values for the sale
// Make sale a child of allSales
// Get the p tag to display the unit price
// And store it in a variable price
// add event listener to each option
// So as to display thier  price when they are clicked
// Get the following by id:
    // Quantity and store it as Qty
    // Discount and store it as disc
    // Total and store it as total
// Multiply the price and subtract it from the discount
// And display it in the  total

// code
let sale = document.createElement("option");
let allSales = document.getElementById("allSales");
let count = Number(localStorage.getItem("count"));
let style = document.createAttribute("style");
let animal = "goat"

console.log(count);
for(let i = 0;i<localStorage.length;i++){
    console.log(localStorage.length)
    let service = JSON.parse(localStorage.getItem((`new service${i}`)))
    console.log(service);
    console.log(allSales);
    console.log(sale);
    sale.innerText = service 
    allSales.append(sale)
    sale.style.color="black"

}    