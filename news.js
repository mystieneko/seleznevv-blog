function addnews(){
	var inputText= document.getElementById("text");
	localStorage.setItem("text", inputText.value);
   	alert("Успешно добавлено!")
   }
function getnews() {
	const statusElement = document.getElementById('news-text')

	statusElement.innerText = localStorage.getItem("text")
}
function clearfield() {
	alert("Поле успешно очищено")
}