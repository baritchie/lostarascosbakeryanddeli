---
layout: null
---

var fontA = new FontFaceObserver('Lato');
var fontB = new FontFaceObserver('Lobster');

fontA.load().then(function () {
  console.log('Lato is available');
});

fontB.load().then(function () {
  console.log('Lobster is available');
});