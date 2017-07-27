//Need to have CORS (Cross Origin Resource Sharing extension on to make XML requests to different domains)
//Getting data from https://www.areacodelocations.info/areacodelist.html

var areaCodeMap = new Map();

var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.areacodelocations.info/areacodelist.html", true);
xhr.responseType = 'document';
xhr.send();

//Load area codes and states
xhr.onload = function(e) {
	var doc = e.target.responseXML;
	for(var i = 0; i < doc.getElementsByTagName('td').length; i += 4) {
		areaCodeMap.set(doc.getElementsByTagName('td')[i].innerText, doc.getElementsByTagName('td')[i+1].innerText);
	}
}

function lookUp() {
	var r = areaCodeMap.get(document.getElementById('AreaCode').value);
	if(r === undefined) {
		document.getElementsByTagName('h3')[0].innerHTML = "Not found";
	}

	else {
		document.getElementsByTagName('h3')[0].innerHTML = r;
	}
}