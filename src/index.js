import './styles/style.css';
import $ from 'jquery';

let getText = $('.message-field');

getText.bind('input', function () {
	$('.message-formatted')[0].innerHTML = getText[0].value.replace(/\s{2,}|\n/igm, ' ').replace(/^\s+/, '').toLowerCase();
});