filterObjects("all");
workBtn("allBtn");

function filterObjects(c) {
  let x, i;
  x = document.getElementsByClassName("item");
  if (c == "all") c = "";
  for (let i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function workBtn(id) {
  let x = document.getElementsByClassName("pBtn");
  console.log(x.length);
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("btnSelected");
  }

  let btn = document.getElementById(id);
  btn.className += " " + "btnSelected";
}
