function truncate(element,chars) {
	var theStr = element.innerHTML;
	var newStr = theStr.slice(0,chars);
	element.innerHTML = newStr + '...';
console.log(newStr);
}

truncate(document.getElementById('special'), 130);

