document.getElementById("button").addEventListener("click", clicked);

function clicked() {
  let A = +document.getElementById("A").value;
  let B = +document.getElementById("B").value;
  let C = Math.sqrt(A ** 2 + B ** 2);

  document.getElementById("output").innerHTML = Math.round(C);
}
