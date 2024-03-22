function searchText(){
	var search = document.getElementById("input").value;
	var data = document.getElementById("content");
	var pattern = new RegExp(`${search}`,"ig");
	data = data.textContent.replace(pattern, match => `<mark>${match}</mark>`);
	document.getElementById("content").innerHTML = data;
}