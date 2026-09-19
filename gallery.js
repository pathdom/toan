document.querySelectorAll('.product-gallery-thumbs').forEach(function (thumbs) {
  var main = thumbs.parentElement.querySelector('.product-gallery-main img');
  if (!main) return;
  var imgs = thumbs.querySelectorAll('img');
  imgs.forEach(function (t) {
    t.addEventListener('click', function () {
      var src = main.src, alt = main.alt;
      main.src = t.src;
      main.alt = t.alt;
      t.src = src;
      t.alt = alt;
    });
  });
});
