const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");
  const weight_guide = document.getElementById("weight-range");

  if (height === "" || height < 0 || isNaN(height)) {
    alert(
      "Please enter a number greater than 0 and it should be a valid number.",
    );
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    alert(
      "Please enter a weight greater than 0 and it should be a valid weight in KG.",
    );
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerText = bmi;

    if (bmi <= 18.6) {
      weight_guide.innerText = "Under Weight = Less than 18.6";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weight_guide.innerText = "Normal Range = 18.6 and 24.9";
    } else if (bmi >= 24.9) {
      weight_guide.innerText = "Overweight = Greater than 24.9";
    } else {
      weight_guide.innerText = "Mottttaaaaaaa";
    }
  }
});
