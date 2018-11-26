import './styles/style.css';
import $ from 'jquery';

let fieldMessage = $('.message-field');
let outputMessage = $('.message-formatted');

function formattedMessage () {
	let searchSpaceAndWrap = /\s{2,}|\n/igm;

	return fieldMessage[0].value.trim().replace(searchSpaceAndWrap, ' ').toLowerCase();
}

fieldMessage.on('input', function () {
	outputMessage.text(formattedMessage());
});