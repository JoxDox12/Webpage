function searchText(){
	var search = document.getElementById("container").value.toLowerCase();
	var data = document.getElementById("content").innerHTML.toLowerCase();
	var highlightedContent = content.replace(new RegExp(searchTerm, 'gi'), function (match) {
		return '<mark>' + match + '</mark>';
	});

	document.getElementById('content').innerHTML = highlightedContent;
	if(data.includes(search)){
		alert("Word found");
	}
	else{
		alert("Word not found");
	}
	console.log(search);
}