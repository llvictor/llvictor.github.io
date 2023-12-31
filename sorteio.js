var entryHit = [];
var entryList = [];

/* Bolão Isa */
entryList.push([11, 13, 17, 23, 40, 60]);
entryList.push([6, 12, 25, 30, 34, 49]);
entryList.push([12, 15, 23, 33, 41, 55]);
entryList.push([7, 20, 32, 37, 41, 42]);
entryList.push([3, 6, 7, 19, 22, 57]);
entryList.push([3, 4, 19, 25, 37, 52]);
entryList.push([9, 11, 24, 25, 33, 57]);
entryList.push([10, 11, 18, 48, 55, 57]);
entryList.push([2, 3, 5, 16, 20, 42]);
entryList.push([9, 22, 28, 39, 51, 59]);
entryList.push([1, 3, 14, 18, 26, 28]);
entryList.push([6, 12, 16, 26, 39, 50]);
entryList.push([9, 12, 18, 29, 45, 59]);
entryList.push([4, 18, 24, 26, 49, 52]);
entryList.push([2, 3, 5, 37, 42, 52]);
entryList.push([3, 5, 7, 11, 12, 21]);
entryList.push([8, 17, 18, 19, 38, 60]);
entryList.push([2, 7, 11, 23, 25, 34]);
entryList.push([3, 4, 13, 14, 34, 41]);
entryList.push([1, 15, 18, 23, 47, 59]);
entryList.push([1, 9, 14, 28, 34, 42]);
entryList.push([9, 16, 19, 41, 44, 57]);
entryList.push([4, 17, 29, 35, 38, 51]);
entryList.push([1, 7, 22, 35, 45, 47]);
entryList.push([17, 22, 34, 46, 53, 59]);
entryList.push([1, 7, 9, 11, 38, 49]);
entryList.push([23, 28, 39, 46, 53, 57]);
entryList.push([4, 12, 23, 32, 47, 55]);
/* Isa e Victor */
entryList.push([6, 14, 21, 24, 41, 59]);
entryList.push([3, 15, 17, 33, 44, 51]);
entryList.push([11, 36, 40, 42, 55, 57]);
/* Pai */

function sendForm() {
  let form = document.getElementById("form");
  let entry = form.elements["entry"].value;
  entryHit = entry.split(",").map(Number);
  for (let i = 0; i < entryList.length; i++) {
    verifyEntry(entryList[i]);
  }
  let element = document.getElementById("box-result");
  console.log(element);
  element.style.display = "block";
}

function verifyEntry(entry) {
  let hits = [];
  for (let i = 0; i < 6; i++) {
    if (verifyNumber(entry[i])) {
      hits.push(entry[i]);
    }
  }
  let element = document.getElementById("result-body");
  element.innerHTML +=
    "<tr><td>" +
    entry.toString() +
    "</td><td><span class='hits'>" +
    hits.toString() +
    "</span> - (" +
    hits.length +
    ")</td></tr>";
}

function verifyNumber(number) {
  for (let i = 0; i < 6; i++) {
    return entryHit.find((x) => x == number);
  }
}
