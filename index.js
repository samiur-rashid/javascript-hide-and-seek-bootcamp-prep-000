function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div')
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelector('ul.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n);
  }
}
