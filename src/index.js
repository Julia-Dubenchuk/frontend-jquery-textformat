import './styles/style.css';
import $ from 'jquery';

let fieldMessage = $('.message-field');
let outputMessage = $('.message-formatted');

function formattedMessage () {
	let spaceAndLineEndRegExp = /\s{2,}|\n/igm;

	return fieldMessage[0].value.trim().replace(spaceAndLineEndRegExp, ' ').toLowerCase();
}

fieldMessage.on('input', function () {
	outputMessage.text(formattedMessage());
});