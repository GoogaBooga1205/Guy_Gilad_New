const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var loginbutton = document.getElementById('button');
var closeBtn = document.querySelector('.close-btn');

app.set('views', path.join(__dirname, "views"));

loginbutton.addEventListener('click', function (event) {
  event.preventDefault();
  // checks the values from the form inputs
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  //now not neccery but next this will check if user is logged in
  if (password == password) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //+put data in database
  }
  else {
    //button for the validation error popup
    popup.style.display = 'block';
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  }
});