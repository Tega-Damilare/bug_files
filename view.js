// get the elements from html
let yellow = document.getElementById("linkDiv")
let table = document.getElementById('table');
// let tr = document.createElement('tr');
let tableplace = document.getElementById('tableDiv');
let count = Number(localStorage.getItem("count"))
console.log(typeof(count));
console.log(count);
let body = document.getElementById('bd');




// creates the rows
for(let i=0; i<count - 1; i++){
        let service = JSON.parse(localStorage.getItem( `new service${i}`))
        console.log(service);
        console.log(typeof(service));
        console.log(service.serviceName);
        let tr = document.createElement('tr');
        // create the columns
        
            let td = document.createElement('td');
            let td1 = document.createElement('td')
           
            
            td1.innerHTML = service.unitPrice
            td.innerHTML = service.serviceName
            console.log(td);
            console.log(td1);

            tr.append(td);
            tr.append(td1);
        
        table.append(tr);
        // body.append(table);
        
    }