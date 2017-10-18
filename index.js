function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div')
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelector('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML += n;
  }
}
