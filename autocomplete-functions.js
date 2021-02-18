var inputElement = document.querySelector('#texto');
var btnElement = document.querySelector('.btn_search');
var dataList = document.querySelector('#historico');

var items = JSON.parse(localStorage.getItem('lista_autocomplete')) || [];

btnElement.onclick = addOption;
inputElement.onkeypress = render;
inputElement.onblur = clear;


function addOption(){
	var optionText = inputElement.value;
	if (items.indexOf(optionText) == -1){
		items.push(optionText);
		saveToStorage();
	}
}

function render(){
	for(item of items){
		var optionElement = document.createElement('option');
		optionElement.setAttribute('value', item);
		dataList.appendChild(optionElement);
	}
}

function clear(){
	inputElement.value = '';
	dataList.innerHTML = '';
}

function saveToStorage(){
	localStorage.setItem('lista_autocomplete', JSON.stringify(items));
}




