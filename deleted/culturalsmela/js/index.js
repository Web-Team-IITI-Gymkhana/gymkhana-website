function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			};
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
}

function show(i) {
	var desc = document.getElementsByClassName("desc")[i];
	var k = 0;
	console.log(desc.style.display);
	if (desc.style.display == "none" || desc.style.display == "") k = 1;
	hideall();
	if (k) desc.style.display = "block";
	else desc.style.display = "none";
}

function hideall() {
	var i = 0;
	var desc = document.getElementsByClassName("desc");
	while (desc[i]) {
		desc[i].style.display = "none";
		i++;
	}
}

function setIframeWidth() {
	var iframe = document.getElementById("videoEmbedding");
	var viewportWidth = window.innerWidth;
	if (viewportWidth < 1000) {
		iframe.width = 0.9 * viewportWidth;
		iframe.height = 0.5056 * viewportWidth;
	} else {
		iframe.width = 0.45 * viewportWidth;
		iframe.height = 0.2528 * viewportWidth;
	}
}
