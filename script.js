// JavaScript
console.log('Hello world!');
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

// ボタンがクリックされたら、動作させる
btn.addEventListener('click', () => {
  //動作を記述
});

btn.addEventListener('click', () => {
  // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
});

// ボタンがクリックされたら、動作させる
btn.addEventListener('click', () => {
  // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
  // テキストを書き換える
  text.textContent = 'Dark mode';
});

btn.addEventListener('click', () => {
  // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
  // テキストを書き換える
  // もし、bodyにクラス名blackがついていたら
  if (document.body.classList.contains('black')) {
    text.textContent = 'Dark mode';
  } else {
    text.textContent = 'Light mode';
  }
});
