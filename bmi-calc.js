function calcBmi() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = weight / Math.pow(height / 100, 2);
  document.getElementById("bmi").value = bmi;
}