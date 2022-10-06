// document.getElementById('submit').onclick = function() {
// var firstName = document.getElementById('first Name').value;
// var lastName = document.getElementById('last Name').value;

// document.getElementById("output").innerHTML = firstName + " " + lastName;
// }

document.getElementById("calculate").onclick = calculate

function calculate (){
  var  salary = document.getElementById('salary').value;
  var  rent = document.getElementById('rent').value;
  var  food = document.getElementById('food').value;
  var  fuel = document.getElementById('fuel').value;

  salaryInt = parseInt(salary);
  rentInt = parseInt(rent);
  foodInt = parseInt(food);
  fuelInt = parseInt(fuel);
  
   totalExpense = rentInt + foodInt + fuelInt;
   savings = salary - totalExpense;

    document.getElementById('salary-output').innerHTML = 
    "you earn ksh: " + salary;
    document.getElementById('expenses').innerHTML = 
    "you spend ksh: " + totalExpense;
    document.getElementById('savings').innerHTML =
     "you save ksh: " + savings;
}