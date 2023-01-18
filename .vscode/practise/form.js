// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge
const orderURL = "http://localhost:3000/order"
function addCategory(){
    //preventEventDefault()
    const category = document.createElement('input')
    category.setAttribute('placeholder','Category Name')
    category.setAttribute('name', 'cat')
    category.required='required'
    
    
    const item = document.createElement('input')
    item.setAttribute('placeholder','Item Name')
    item.setAttribute('name', 'iName')
    item.required='required'
    //item.setAttribute('class','form-control')
    const price = document.createElement('input')
    price.setAttribute('placeholder','Price')
    price.setAttribute('class','item-price')
    price.setAttribute('name', 'iPrice')
    price.setAttribute('value',0)
    price.required='required'
    const qty = document.createElement('input')
    qty.setAttribute('placeholder','Quantity')
    qty.setAttribute('class','item-qty')
    qty.setAttribute('name', 'iQty')
    qty.setAttribute('value',0)
    qty.required='required'

    
    const divElement = document.createElement('div')
   // divElement.classList.add('categoryDiv')
    divElement.appendChild(category)
    divElement.appendChild(item)
    divElement.appendChild(price)
    divElement.appendChild(qty)

    document.getElementById('ordered-items').appendChild(divElement)
    let amt = 0;
    let netAmount = document.getElementById('net-amt')
    let itemPrice = document.getElementsByClassName('item-price')
    let itemQty = document.getElementsByClassName('item-qty')
    //if(itemPrice[0].value >0 || itemQty[0].value >0){
        // for(let i=0;i<itemPrice.length;i++){
        //     amt +=  parseInt(itemPrice[i].value)*parseInt(itemQty[i].value)
        //     // console.log(itemPrice[i].value)
        //     // console.log(itemQty[i].value)
        //     // console.log(amt) 
        //     netAmount.setAttribute('value',amt)
    
        // }

   // }  
   qty.addEventListener('keyup',()=>{
        let fAmt =0
        for(let i=0;i<itemPrice.length;i++){
      const  total = parseInt(document.querySelectorAll(".item-price")[i].value)*parseInt(document.querySelectorAll(".item-qty")[i].value)
             fAmt += total}
        document.querySelector("#net-amt").value=fAmt})
}




let orders = []
// Save the order details on clicking the submit button
function order(event){
    let formData = new FormData(event.target);
    console.log(formData)
    let formprops= Object.fromEntries(formData);
    console.log(formprops)
    const postPromise= axios.post(orderURL,formprops)
        .then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log("post-error",error);
        });
    //  const orderDetails = {
    //     orderId : document.getElementById('orderId').value,
    //     orderdate: document.getElementById('orderDate').value,
    //     cName : document.getElementById('custName').value,
    //     cEmail : document.getElementById('custEmail').value,
    //     cNum : document.getElementById('custNumber').value,
    //     cAdd : document.getElementById('custAdd').value,
    //     totalAmt: document.getElementById('net-amt').value       
    // }
    // console.log(orderDetails)
    // orders.push(orderDetails)
    // console.log(orders)
    //alert(`Order Created\n Total Amount to be paid :${orderDetails.totalAmt}`)
    postPromise.then(response=>{
        console.log(response);
    });

    postPromise.catch((reject)=>{alert(reject)})
   return false
}

//Save the order details captured from the form in json-server using Axios API

