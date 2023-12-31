var entryHit = [];
var entryList = [];
var entryList1 = [];
var entryList2 = [];
var entryList3 = [];

/* Bolão Isa */
entryList1.push([11, 13, 17, 23, 40, 60]);
entryList1.push([6, 12, 25, 30, 34, 49]);
entryList1.push([12, 15, 23, 33, 41, 55]);
entryList1.push([7, 20, 32, 37, 41, 42]);
entryList1.push([3, 6, 7, 19, 22, 57]);
entryList1.push([3, 4, 19, 25, 37, 52]);
entryList1.push([9, 11, 24, 25, 33, 57]);
entryList1.push([10, 11, 18, 48, 55, 57]);
entryList1.push([2, 3, 5, 16, 20, 42]);
entryList1.push([9, 22, 28, 39, 51, 59]);
entryList1.push([1, 3, 14, 18, 26, 28]);
entryList1.push([6, 12, 16, 26, 39, 50]);
entryList1.push([9, 12, 18, 29, 45, 59]);
entryList1.push([4, 18, 24, 26, 49, 52]);
entryList1.push([2, 3, 5, 37, 42, 52]);
entryList1.push([3, 5, 7, 11, 12, 21]);
entryList1.push([8, 17, 18, 19, 38, 60]);
entryList1.push([2, 7, 11, 23, 25, 34]);
entryList1.push([3, 4, 13, 14, 34, 41]);
entryList1.push([1, 15, 18, 23, 47, 59]);
entryList1.push([1, 9, 14, 28, 34, 42]);
entryList1.push([9, 16, 19, 41, 44, 57]);
entryList1.push([4, 17, 29, 35, 38, 51]);
entryList1.push([1, 7, 22, 35, 45, 47]);
entryList1.push([17, 22, 34, 46, 53, 59]);
entryList1.push([1, 7, 9, 11, 38, 49]);
entryList1.push([23, 28, 39, 46, 53, 57]);
entryList1.push([4, 12, 23, 32, 47, 55]);
/* Isa e Victor */
entryList2.push([6, 14, 21, 24, 41, 59]);
entryList2.push([3, 15, 17, 33, 44, 51]);
entryList2.push([11, 36, 40, 42, 55, 57]);
/* Pai */
entryList3.push([9, 10, 14, 34, 35, 43]);
entryList3.push([7, 31, 39, 45, 53, 54]);
entryList3.push([20, 32, 35, 45, 51, 54]);
entryList3.push([6, 26, 28, 32, 56, 60]);
entryList3.push([13, 23, 27, 41, 43, 49]);
entryList3.push([5, 6, 25, 36, 50, 51]);
entryList3.push([10, 15, 23, 25, 32, 33]);
entryList3.push([5, 7, 12, 33, 34, 51]);
entryList3.push([1, 2, 5, 9, 22, 25]);
entryList3.push([5, 9, 10, 12, 14, 54]);
entryList3.push([1, 2, 8, 17, 39, 57]);
entryList3.push([2, 11, 21, 36, 37, 42]);

function sendForm() {
  checkOptionsSelected();
  let form = document.getElementById("form");
  let entry = form.elements["entry"].value;
  entryHit = entry.split(",").map(Number);
  for (let i = 0; i < entryList.length; i++) {
    verifyEntry(entryList[i], i + 1);
  }
  let element = document.getElementById("box-result");
  element.style.display = "block";
}

function checkOptionsSelected() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.value === "1") {
      entryList = entryList.concat(entryList1);
    }
    if (checkbox.value === "2") {
      entryList = entryList.concat(entryList2);
    }
    if (checkbox.value === "3") {
      entryList = entryList.concat(entryList3);
    }
  });
}

function verifyEntry(entry, index) {
  let hits = [];
  for (let i = 0; i < 6; i++) {
    if (verifyNumber(entry[i])) {
      hits.push(entry[i]);
    }
  }
  let element = document.getElementById("result-body");
  element.innerHTML +=
    "<tr><td>" +
    index +
    "</td><td>" +
    makeEntry(entry) +
    "</td><td><span class='hits'>" +
    hits.toString() +
    "</span> - (" +
    hits.length +
    ")</td></tr>";
}

function makeEntry(entry) {
  let html = "";
  for (let i = 0; i < entry.length; i++) {
    html += '<span class="entry-number">' + entry[i] + "</span>";
    if (i < entry.length - 1) html += " - ";
  }
  return html;
}

function verifyNumber(number) {
  for (let i = 0; i < 6; i++) {
    return entryHit.find((x) => x == number);
  }
}
