getFirstSelector(selector); {
  return document.querySelector(selector);
}

nestedTarget(); {
  return document.querySelector('#nested').querySelector('.Target');
}

increaseRankBy(n); {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (i + n).toString();
  }
}

deepestChild(){
  
}