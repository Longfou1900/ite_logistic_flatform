function createWarehouses(){
const warehousesHTML = `

`;
return warehousesHTML;
}

function insertWarehouses() {
  document.body.insertAdjacentHTML('afterbegin', createWarehouses());
}

// Load when page is ready
document.addEventListener('DOMContentLoaded', insertWarehouses);