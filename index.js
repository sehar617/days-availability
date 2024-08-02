function availability() {
  let name = prompt("Enter your name");
  let day = document.getElementById("day1").value;
  let available; // Declare the variable here

  if (day === "monday") {
    available = "go for swimming";
  } else if (day === "tuesday") {
    available = "watch movies";
  } else if (day === "wednesday") {
    available = "Go for shopping";
  } else if (day === "thursday") {
    available = "Outing with friends";
  } else if (day === "friday") {
    available = "go for a doctor for routine checkup";
  } else if (day === "saturday") {
    available = "playing cricket with friends";
  } else if (day === "sunday") {
    available = "take a rest ";
  } else {
    available = "not available";
  }

  alert(`Dear ${name}, the available things for you are: ${available}`);
  document.getElementById("Show").innerHTML = `<h1>Dear ${name}, the available things for you are: ${available}</h1>`;
  console.log(`Dear ${name}, the available things for you are: ${available}`);
}