// ========================
// 🎯 Part 1: Basics (with user input)
// ========================

document.getElementById("check-btn").addEventListener("click", function() {
  let userName = document.getElementById("name-input").value;
  let userAge = parseInt(document.getElementById("age-input").value);
  let message = "";

  if (!userName || isNaN(userAge)) {
    message = "Please enter both name and age.";
  } else {
    if (userAge >= 18) {
      message = userName + " is an adult.";
    } else {
      message = userName + " is a minor.";
    }
  }

  document.getElementById("part1-output").innerText = message;
});


// ========================
// ❤️ Part 2: Functions
// ========================

function showGreeting() {
  let greeting = "Hello, welcome to JavaScript!";
  document.getElementById("greeting-output").innerText = greeting;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log("Total price (2 items at $10): $" + calculateTotal(10, 2));


// ========================
// 🔁 Part 3: Loops
// ========================

function showNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("numbers-output").innerText = output;
}

let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// ========================
// 🌐 Part 4: DOM Manipulation
// ========================

document.getElementById("toggle-btn").addEventListener("click", function() {
  document.getElementById("toggle-text").classList.toggle("highlight");
});

document.getElementById("add-item").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("item-list").appendChild(newItem);
});

document.getElementById("toggle-text").addEventListener("mouseover", function() {
  this.textContent = "You hovered over me!";
});
document.getElementById("toggle-text").addEventListener("mouseout", function() {
  this.textContent = "Watch me change!";
});
