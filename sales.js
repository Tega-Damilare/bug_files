/*
create a variable (sale) to store the option tag sale ==
get the select element from enter_sales.html by Id ==
And Store it as allSales ==
Get the updated services from the local storage == 
store them as the values for the sale ==
Make sale a child of allSales ==
Get the p tag to display the unit price ==
And store it in a variable price ==
Get the following by id:
    Quantity and store it as Qty
    Discount and store it as disc
    Total and store it as total
Multiply the price and subtract it from the discount
And display it in the  total
*/

// code
let allSales = document.getElementById("allSales");
let style = document.createAttribute("style");
let price = document.getElementById("price");
let qty = document.getElementById("qty");
let disc = document.getElementById("disc");
let total = document.getElementById("total");
let counter;
let Savebutton = document.getElementById('save');
let inpt = document.getElementsByTagName('input');
let calc = document.getElementById("calc");
let service;
let count = Number( localStorage.getItem("count"))
let sale;

    for(let i=0; i<count; i++){
        
         service = JSON.parse(localStorage.getItem( `new service${i}`))
         sale = document.createElement("option");
        console.log(service);
        console.log(typeof(service));
        console.log(service.serviceName);
        sale.innerHTML = service.serviceName
        allSales.append(sale)
    allSales.addEventListener('click',(ev)=>{
        if (sale.value === service.serviceName) {
            price.innerHTML = service.unitPrice
        }
    })    
        
      console.log(service);
        console.log(allSales);
        // console.log(sale);
        
        sale.innerText = service.serviceName
        allSales.append(sale)
        sale.style.color="black"
        // price.innerText = service.unitPrice
calc.addEventListener('click',(ev)=>{
        total.innerText = service.unitPrice * qty.value - disc.value
ev.preventDefault()
})
}
// console.log(counter);

Savebutton.addEventListener('click',(ev)=>{
    console.log('i reached here the eventlistener works')
    if (!localStorage.getItem("counter")){     
        localStorage.setItem("counter",0);
    }
    // console.log(counter)
    class Sold{
        constructor(serviceName, unitPrice, total, discount){
            this.serviceName = serviceName;
            this.unitPrice = unitPrice;
            this.total = total;
            this.discount = discount
        }
    }
    let newsale = new Sold(service.serviceName, service.unitPrice, total.innerHTML, disc.value); 
    console.log(service.unitPrice, total.innerHTML)
    // services.push(newser)
    // console.log(services)
    // console.log(newser)

   
    counter = Number( localStorage.getItem("counter"))
    console.log(counter);
    console.log(typeof(counter));
    localStorage.setItem(`new sale${counter}`,JSON.stringify(newsale));
    counter++;
    localStorage.setItem("counter",counter)


    ev.preventDefault();
})       

