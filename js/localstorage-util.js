let storage = window.localStorage;

let submitAddress = document.getElementById("submit-address");
submitAddress.addEventListener('click', addAddress);
let addressesContent = document.getElementById("addresses-content");
if (storage.getItem("address-name") == null){
  addressesContent.innerText = ``
} else {
  addressesContent.innerText = 
  ` 
    ${storage.getItem("address-name")}
    ${storage.getItem("address")}
    ${storage.getItem("ship-method")}
  `
}

let removeAddress = document.getElementById("delete-address");
deleteAddress.addEventListener('click', deleteAddress);
addressesContent.innerText = ``


function addAddress() {
  let addressName = document.getElementById("address-name");
  let address = document.getElementById("address");
  let shipMethod = document.getElementById("ship-method");
  storage.setItem("address-name", addressName.value);
  storage.setItem("address", address.value);
  storage.setItem("ship-method", shipMethod.value);
 }

 function deleteAddress() {
  storage.removeItem("address-name");
  storage.removeItem("address");
  storage.removeItem("ship-method");
 }
