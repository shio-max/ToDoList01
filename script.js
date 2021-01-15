//"close"ボタンの作成、各list item に挿入
const mylistitem = document.getElementsByTagName("LI");
for (let i = 0; i < mylistitem.length; i++) {
  const span = document.createElement("SPAN");
  const clsBtn = document.createElement("i");
  span.className = "close"
  clsBtn.classList.add( "fas","fa-trash");
  span.appendChild(clsBtn);
  mylistitem[i].appendChild(span);
}

//ゴミボタンでそのItemが削除される
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


//list itemをクリックした際、"checked"マークつけ外し
const list = document.querySelector("ul");
list.addEventListener("click",(event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

//"Add"ボタンがクリックされた際、新しいlist item を作成,
function newListItem() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const newItem = document.createTextNode(inputValue);
  li.appendChild(newItem);
    if (inputValue === '') {
      alert("タイトルを入力してください！");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
  document.getElementById("myInput").value = ""; //inputのvalueをからにしてリセット
  const span = document.createElement("SPAN");
  const clsBtn = document.createElement("i");
  span.className = "close"
  clsBtn.classList.add( "fas","fa-trash");
  span.appendChild(clsBtn);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//新しい項目をEnterキーからでも作成し、追加できる
const inputBtn = document.getElementById("myInput");
inputBtn.addEventListener('keypress', function(e){
   if(e.keyCode == 13) {
     newListItem();
   }
})