// Write your solution in this file!
var customerName = "bob";

//const upperCaseCustomerName = customerName => customerName.toUpperCase(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "john"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "jim"
}