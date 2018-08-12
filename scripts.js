'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    document.querySelector('#result').innerHTML = `Twoje imię to: <b>${name.value}</b> <br>Twoje nazwisko to: <b>${surname.value}</b>`;
    name.value=``;
    surname.value=``;
});
