function addnews(){
	var inputText= document.getElementById("input2");
	var inputAuthor= document.getElementById("input1");
	localStorage.setItem("input2", inputText.value);
	localStorage.setItem("input1", inputAuthor.value);
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("input2");
	newsAuthor.innerText = localStorage.getItem("input1");
   }
function getnews() {
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("input2");
	newsAuthor.innerText = localStorage.getItem("input1");
}
function clearInput(){
	var getValue = document.getElementById("input1");
	  if (getValue.value !="") {
		  getValue.value = "";
	  }
	var getValue= document.getElementById("input2");
	  if (getValue.value !="") {
		  getValue.value = "";
	  }
}
function clearnews() {
	localStorage.removeItem("input2");
	localStorage.removeItem("input1");
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("input2");
	newsAuthor.innerText = localStorage.getItem("input1");
}
function boom() {
	document.write("404 - Страница не найдена. <br> Зайдите позже или попробуйте обновить страницу.");
}
