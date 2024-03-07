let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let result5 = document.querySelector(".result5");
let button = document.querySelector(".descirbe-button");
let result = document.querySelector(".result");

button.onclick = function() {
  let ans1 = document.querySelector(".humor").value;
  let ans2 = document.querySelector(".weather").value;
  console.log(ans1);
  console.log(ans2);

  if (ans1 >= 1 && ans2 === "cold") {
    result.innerHTML = "Your humor is " + ans1 + " and you prefer " + ans2 + " so you are Squidward";
  } else if (ans1 >= 2 && ans2 === "sunny") {
    result.innerHTML = "Your humor is " + ans1 + " and you prefer sunny " + ans2 + " so you are Mr.Krabs";
  } else if (ans1 >= 3 && ans2 === "sunny") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are Partrick ";
  }
  else if (ans1 >= 2 && ans2 === "cold") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are Mr.Krabs ";
  }
  else if (ans1 >= 3 && ans2 === "cold") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are Partrick ";
  }
  else if (ans1 >= 1 && ans2 === "sunny") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are Squidward ";
  }
  else if (ans1 >= 4 && ans2 === "sunny") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are SpongeBob ";
  }
  else if (ans1 >= 4 && ans2 === "cold") {
    result.innerHTML = " Your humor is " + ans1 + " and your prefer " + ans2 + " so you are SpongeBob ";
  }

  else {
    result.innerHTML = "uhmmmm put something..?! ";

  }
};





