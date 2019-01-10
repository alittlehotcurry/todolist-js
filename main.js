var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");

addBtn.onclick = function () {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    ul.appendChild(li);
  }
  else {
    alert("List item cannot be empty");
  }

  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.appendChild(entryText);
  li.appendChild(entry);

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

  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E");
  edit.className = "edit";
  edit.appendChild(eText);
  li.appendChild(edit);
  edit.onclick = function () {
    var p = prompt("Edit your entry");
    var entry = this.parentElement.getElementsByClassName("userEntry")[0]; 
    entry.innerText = p;
  }


  var liTag = document.getElementsByTagName("LI");

  for (var j = 0; j < liTag.length; j++) {
    liTag[j].onclick = function () {
      this.classList.toggle("checked");
    }
  }

  listDetail.value = "";
}
