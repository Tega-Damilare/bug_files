/*
    get the following from local storage (by looping through): ==
        count and store it in the varible count ==
        counter in the variable counter == 
        counts in the variable counts ==
        service and store it in the services ==
        issue and store it in the varible issues ==
        sale and store it as sales ==
    get the fetch button from html ==
    save the button in a variable ($fetch) ==
    add a click event to $fetch ==
    to display everything in the local storage ==
    create an h2 element tag ==
    to display everything in the local storage ==
    get the fetchDiv from html by id and store it as fetchDiv ==
    append the h2 to the fetch div
    expected output
    display the: 
     issues 
     sales
     services
*/
let $fetch = document.getElementById('fetch');
let count = Number(localStorage.getItem("count")) 
let counter = Number(localStorage.getItem("counter")) 
let counts = Number(localStorage.getItem("counts")) 
let services;
let sales;
let dispDiv = document.getElementById('displayDiv')

$fetch.addEventListener('click',(ev)=>{
    for(let i = 0;i<count;i++){
        console.log(localStorage.length)
         services = JSON.parse(localStorage.getItem((`new service${i}`)))
        console.log(services);
        let hTag = document.createElement('h2');
        hTag.innerHTML=`services: ${services.serviceName} price: ${services.unitPrice}`
        dispDiv.append(hTag);
    }
    for(let i = 0;i<counter;i++){
        console.log(localStorage.length)
        sales = JSON.parse(localStorage.getItem((`new sale${i}`)))
        console.log(sales);
        let hTag = document.createElement('h3');
        hTag.innerHTML=`sold item: ${sales.serviceName}, Price: ${sales.unitPrice}, Total: ${sales.total}, Discounts: ${sales.discount}`
        dispDiv.append(hTag);

    }
    for(let i = 0;i<counts;i++){
        console.log(i);
        console.log(counts);
        console.log(localStorage.length)
        let issues = localStorage.getItem(`new issue${i}`)
        console.log(issues);
        console.log(typeof(issues));
        let hTag = document.createElement('h2');
        hTag.innerHTML=`Issue : ${issues.issue}`
        dispDiv.append(hTag);
    }
    
    
    
})


// $fetch.addEventListener('click',(ev)=>{
//     hTag.innerText = `service name: ${services.serviceName} price: ${services.unitPrice}
//                     issues: ${issues.issue}
//                     sales: ${sales}`
// })
// let fetchDiv = document.getElementById("fetchDiv");
// fetchDiv.append(hTag)
// hTag.style.color = "black"