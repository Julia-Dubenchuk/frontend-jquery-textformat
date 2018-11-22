import './styles/style.css';
import $ from 'jquery';

let text = $('.message-field');
let output = $('.message-formatted');
let regexp = //igm;
output[0].innerHTML = 'dsfsdfsf';
text.change(function() {
	output[0].innerHTML = text[0].value.replace(/ {2,}/igm,' ').replace(/^ [^\s]{1,}/,'').toLowerCase();
});