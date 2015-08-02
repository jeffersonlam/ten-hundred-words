'use strict';

var words;
var url = './js/data/data.json';
get(url);

function get(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = callback;
  xhr.send();

  function callback() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      words = response.words;
    } else if (xhr.status != 200) {
      console.error('AJAX request responded with:', xhr.status, xhr.statusText);
    }
  }
}

function parse() {
  var textArray = splitText(document.getElementById('text').value);
  console.log(textArray);
  var results = compare(textArray, words);
  return false;
}

function splitText(text) {
  return text.split(/\W+/);
}

function compare(arrayA, arrayB) {
  var results = [];
  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i].length == 0) continue;
    if (arrayB.indexOf(arrayA[i]) < 0) {
      console.log('Word not found: ', arrayA[i]);
    }
    else {
      console.log('Word found: ', arrayA[i]);
    }
  }
  return results;
}
