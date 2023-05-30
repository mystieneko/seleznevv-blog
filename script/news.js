function addnews(){
	var inputText= document.getElementById("text");
	var inputAuthor= document.getElementById("author");
	localStorage.setItem("text", inputText.value);
	localStorage.setItem("author", inputAuthor.value);
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("text");
	newsAuthor.innerText = localStorage.getItem("author");
   }
function getnews() {
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("text");
	newsAuthor.innerText = localStorage.getItem("author");
}
function clearInput(){
	var getValue = document.getElementById("author");
	  if (getValue.value !="") {
		  getValue.value = "";
	  }
	var getValue= document.getElementById("text");
	  if (getValue.value !="") {
		  getValue.value = "";
	  }
}
function clearnews() {
	localStorage.removeItem("text");
	localStorage.removeItem("author");
	const newsText = document.getElementById('news-text');
	const newsAuthor = document.getElementById('news-author');
	newsText.innerText = localStorage.getItem("text");
	newsAuthor.innerText = localStorage.getItem("author");
}
