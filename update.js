// Get the button element from update.html
// Get the service name typed from local storage
// edit the price and update the new price

let button2 = document.getElementById("delete")
let button = document.getElementById("saveBtn");
let serviceName = document.getElementById("serviceName");
// let newPrice = document.getElementById("midder");
let newPrice = document.getElementById("inpt");
let services = [];
services.push(serviceName.value)
button.addEventListener('click',(ev)=>{
    let price = newPrice.value
    let serviceType = serviceName.value
    let count = Number(localStorage.getItem("count"));
    console.log(count)
     console.log(count);
   console.log(typeof(count))

    
      for(let i = 0;i<count;i++){
          console.log(count)
          let service = JSON.parse(localStorage.getItem((`new service${i}`)))
          console.log(service);
      }

    //loop through the localstorage
    for(let i = 0;i<count;i++){
      console.log(count)
      let service = JSON.parse(localStorage.getItem((`new service${i}`)))
      services.push(service)
      console.log((((services[i].serviceName))));
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
                service.unitPrice = price;
                console.log(service);
                // let updatedService = service;
                // localStorage.removeItem(`new service${count}`)
                // localStorage.setItem(`new service${count}`,JSON.stringify(updatedService))
            };
        })
    }    

   ev.preventDefault();
})

button2.addEventListener('click',(ev)=>{
  // let price = newPrice.value
  let serviceType = serviceName.value
  let count = Number(localStorage.getItem("count"));
  console.log(count)
   console.log(count);
 console.log(typeof(count))

  
    for(let i = 0;i<count;i++){
        console.log(count)
        let service = JSON.parse(localStorage.getItem((`new service${i}`)))
        console.log(service);
    }

  //loop through the localstorage
  for(let i = 0;i<count;i++){
    console.log(count)
    let service = JSON.parse(localStorage.getItem((`new service${i}`)))
    services.push(service)
    console.log((((services[i].serviceName))));
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
              for (let i = 0; i < count; i++) {
                localStorage.removeItem(`new service${i}`);
                
              }
              // service.unitPrice = price;
              // console.log(service);
              // let updatedService = service;
              // localStorage.removeItem(`new service${count}`)
              // localStorage.setItem(`new service${count}`,JSON.stringify(updatedService))
          };
      })
  }    

 ev.preventDefault();
})


class Animal {
    constructor(name,size,age,color) {
      this.name = name;
      this.size = size;
      this.age = age;
      this.color = color
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name,size,age,color) {
      super(name,size,age,color); // call the super class constructor and pass in the name parameter
    
    }
  
    // speak() {
    //   console.log(`${this.name} barks.`);
    // }
  }
  
  let dog1 = new Dog('bingo',12,2,'white')
  console.log(dog1.speak())

  