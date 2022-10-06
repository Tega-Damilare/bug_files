/*
    create an option tag ==
    to keep all the name of the sales ==
    store it as sale ==
    get the following by id:
       allSales and store it as allSales ==
       price and store it as price ==
       total and store it as total==
       disc and store it as disc == 
    append sale as a child of allSales ==
    add a click event to the allSales ==
    so as to:
        when a sale is clicked ==
        get counter as a from the local storage ==
        turn it into a number    ==
        and store is as counter ==
        loop through counter  ==
        get all the sales ==
        create an array ==
        store it as saleHolder ==
        push the sales into the saleHolder ==
        it should diplay: 
            its price in the price input ==
            its total in the total input ==
            its discounts in the discount input ==
*/      

// Code
let saleHolder = []
let sale;
let allSales = document.getElementById('allSales');
let total = document.getElementById('total');
let disc = document.getElementById('disc');
let price = document.getElementById('price');
let sales;
let count = Number(localStorage.getItem(`count`))
let counter = Number(localStorage.getItem("counter"))

for (let i = 0; i < counter; i++) {
    sales = JSON.parse(localStorage.getItem(`new sale${i}`))
    sale = document.createElement('option');
    console.log(sales);
    console.log(typeof(sales));
    console.log(sales.serviceName);
     sale.innerHTML = sales.serviceName
    allSales.append(sale)
     let price = document.getElementById('price');
allSales.addEventListener('click',(ev)=>{
    console.log(allSales.value)
    console.log(saleHolder);
    for (let i = 0; i < counter; i++) {
        let sales = JSON.parse(localStorage.getItem(`new sale${i}`));
        saleHolder.push(sales)
        console.log('i reached here');
    }
    saleHolder.filter((sales)=>{

        if (sales.serviceName === allSales.value) {
            console.log('i was here');
            console.log(sales.serviceName);
            console.log(sales.unitPrice);
            console.log(sales.total);
            console.log(sales.discount);
            price.value = sales.unitPrice
            total.value = sales.total
            disc.value = sales.discount
        }
    })
    ev.preventDefault()
})
}

