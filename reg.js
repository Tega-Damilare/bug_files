let service = document.getElementById('nwser');
let price = document.getElementById('nwunit');
let Savebutton = document.getElementById('saveBtn');
let count;
let services = []
let service2 = document.getElementById('service');
let newPrice = document.getElementById('inpt');
let save = document.getElementById('safe');

Savebutton.addEventListener('click',(ev)=>{
    console.log('i reached here the eventlistener works')
    if (!localStorage.getItem("count")){     
        localStorage.setItem("count",0);
    }
    console.log(count)
    class Service{
        constructor(serviceName, unitPrice){
            this.serviceName = serviceName;
            this.unitPrice = unitPrice;
        }
    }
    let newser = new Service(service.value, price.value); 
    services.push(newser)
    console.log(services)
    console.log(newser)

   
    count = Number( localStorage.getItem("count"))
    localStorage.setItem(`new service${count}`,JSON.stringify(newser));
    count++;
    localStorage.setItem("count",count)

    ev.preventDefault();
})       

