console.log("hello");
var age_raw = prompt("How old are you?");

if (age_raw !== null) {
  const age = Number.parseInt(age_raw, 10);

  if (age <= 0) {
    alert("Please enter a valid age.");
  } else if (age < 18 && age > 15) {
    alert("Your minimum wage is $8.50 per hour.");
  } else if (age < 65 && age >= 18) {
    alert("Your minimum wage is $12.75 per hour.");
  } else if (age >= 65 && age < 100) {
    alert("Your minimum wage is $15.00 per hour.");
  } else if (isNaN(age)) {
    alert("Please enter a number for your age.");
  } else if (age <= 15) {
    alert("You are too young to be working.");
  } else if (age >= 100) {
    alert("You are too old to be working.");
  }
}
