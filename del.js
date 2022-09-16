/*
get the delser from html by id 
and store it as  delServ
get count from the local storage as a number
loop through the local storage and get each service
get the delete delser from html
add a click event listener to the delete delser
so as to check if the value of deleteServ is eaqual to 
the service name 
if condition is true 
it should remove the service from local storage
*/


let serviceType;
let delser = document.getElementById("delBtn");
let serviceName = document.getElementById("serviceName");
// let newPrice = document.getElementById("midder");
let newPrice = document.getElementById("inpt");
let services = [];
let service
delser.addEventListener('click',(ev)=>{
    let count = Number(localStorage.getItem("count"));
    console.log(count)
     console.log(count);
   console.log(typeof(count))

    
      for(let i = 0;i<count;i++){
          console.log(count)
           service = JSON.parse(localStorage.getItem((`new service${i}`)))
          console.log(service);
          services.push(service.serviceName)
           serviceType = service.serviceName


      }

    //loop through the localstorage
    for(let i = 0;i<count;i++){
      console.log(count)
      let service = JSON.parse(localStorage.getItem((`new service${i}`)))
      services.push(service)
      console.log((((services.serviceName))));
      console.log(serviceType)
 
        console.log(services);
        // services.map((items)=>{
        //     console.log(services);
        //     console.log(items);
        services.filter((service)=>{

            if (service.serviceName === serviceType) {
                console.log('i was here')
                console.log(service.unitPrice);
                console.log(service.serviceName);
                localStorage.removeItem(`new service${i}`)
                console.log(service);
                // let updatedService = service;
                // localStorage.removeItem(`new service${count}`)
                // localStorage.setItem(`new service${count}`,JSON.stringify(updatedService))
            }
       })
    }    

   ev.preventDefault();
})