//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);
// console.log(document.documentElement);

btns.forEach(function (btn) {
  // btn parameter can be called as i want
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; //this is a way to save what class the clicked element has
    if (styles.contains("decrease")) {
      count--; //changing the count from 0 down
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0; // or
      //   styles.contains("reset");
      //   count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count; //changing the count value dispalyed on page
  });
});
