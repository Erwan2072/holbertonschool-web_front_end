// Function that demonstrates lexical scoping
function welcome(firstName, lastName) {
  // Define a variable fullName inside the welcome function
  const fullName = `${firstName} ${lastName}`;

  // Define a nested function displayFullName
  function displayFullName() {
      alert(`Welcome ${fullName}!`);
  }

  // Call the nested function
  displayFullName();
}
