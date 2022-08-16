// Get the button element from update.html
// Get the service name typed from local storage
// edit the price and update the new price


let button = document.getElementById("saveBtn");
let serviceName = document.getElementById("serviceName");
let newPrice = document.getElementById("midder");
let services = [];
services.push(serviceName.value)
button.addEventListener('click',(ev)=>{
   let service = localStorage.getItem("count")
   console.log(services);
   services.map((items)=>{
       console.log(services);
       console.log(items);
       if (items.serviceName === serviceName) {
           items.filter((services)=>{
            console.log(services.unitPrice);
            console.log(services.serviceName);
               services.unitPrice = newPrice
           })
       }
   })
})