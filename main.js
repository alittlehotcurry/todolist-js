var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");

addBtn.onclick = function () {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    var liText = document.createTextNode(listDetail.value);
    var liClose = document.createTextNode("-");
    liClose.className = "close";
    li.appendChild(liText);
    ul.appendChild(li);
  }
  else {
    alert("List item cannot be empty");
  }

  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.style.display = "none";
    }
  }

  var liTag = document.getElementsByTagName("LI");

  for (var j = 0; j < liTag.length; j++) {
    liTag[j].onclick = function () {
      this.classList.toggle("checked");
    }
  }

  listDetail.value = "";
}