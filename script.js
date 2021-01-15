//"close"ボタンの作成、各list item に挿入
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}

//"close"ボタンでそのItemが削除される
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//list itemをクリックした際、"checked"マークをつける
var list = document.querySelector("ul");
list.addEventListener("click", function(event){
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

//"Add"ボタンがクリックされた際、新しいlist item を作成
function newListItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var newItem = document.createTextNode(inputValue);
  li.appendChild(newItem);
    if (inputValue === '') {
      alert("タイトルを入力してください！");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}