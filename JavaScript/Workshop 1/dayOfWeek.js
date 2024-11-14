// 2. Display the day of the week depending on what the user enters (0 -> Sunday).

function getDayOfWeek(dayNum) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNum] || "Invalid day number";
  }
  
  console.log(getDayOfWeek(0)); // Output: Sunday
  console.log(getDayOfWeek(6)); // Output: Saturday
  